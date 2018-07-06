import { PollsService } from './../polls.service';
import { Poll } from './../poll';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  polls: Poll[];

  constructor(private pollsService: PollsService) { }

  ngOnInit() {
    this.getPolls();
  }

  getPolls(): void {
    this.pollsService.getPolls()
      .subscribe(polls => this.polls = polls);
  }

  viewPoll(poll: Poll) {

  }

  deletePoll(poll: Poll) {
    this.pollsService.deletePoll(poll._id).subscribe();
  }

}
