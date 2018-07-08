import { FormGroup, FormControl } from '@angular/forms';
import { PollsService } from './../polls.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poll } from '../poll';
import { Vote } from '../vote';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit, OnDestroy {
  sub: any;
  poll: Poll;
  pollForm: FormGroup;

  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType = 'pie';
  public twitterShareText: string;

  constructor(
    private route: ActivatedRoute,
    private pollsService: PollsService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.getPoll(id);
      }
    });
    this.pollForm = new FormGroup({
      'votedOption': new FormControl(null)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPoll(id) {
    this.pollsService.getPoll(id)
      .subscribe(poll => {
        this.poll = poll;
        this.updateChart();
      });
  }

  updateChart() {
    this.pieChartLabels = this.poll.options;
    this.pieChartData = new Array(this.pieChartLabels.length);
    for (let i = 0; i < this.pieChartLabels.length; i++) {
      this.pieChartData.push(this.poll.votes.filter(x => {
        return x.votedOption === this.pieChartLabels[i];
      }).length);
    }
    this.pieChartData = this.pieChartData.splice(this.pieChartLabels.length);
    this.twitterShareText = `Polling Begins!\nVote for: ${this.poll.title}`;
  }

  castVote() {
    const vote = new Vote();
    vote.user = 'vinkrish';
    vote.votedOption = this.pollForm.value.votedOption;
    this.pollsService.castVote(this.poll._id, vote)
      .subscribe( pollResult => {
        this.poll = pollResult;
        this.updateChart();
      }, err => {
          alert('voting failed!');
        }
      );
  }

}
