import { FormGroup, FormControl } from '@angular/forms';
import { PollsService } from './../polls.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poll } from '../poll';
import { Vote } from '../vote';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit, OnDestroy {
  sub: any;
  poll: Poll;
  pollForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private pollsService: PollsService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.pollsService.getPoll(id)
          .subscribe(poll => this.poll = poll);
      }
    });
    this.pollForm = new FormGroup({
      'votedOption': new FormControl(null)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  castVote() {
    const vote = new Vote();
    vote.user = 'vinkrish';
    vote.votedOption = this.pollForm.value.votedOption;
    this.pollsService.castVote(this.poll._id, vote)
      .subscribe( pollResult => this.poll = pollResult, err => {
          alert('please check connection and make sure server is running');
        }
      );
  }

}
