import { Component, OnInit } from '@angular/core';
import { Poll } from './poll';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  newPoll: Poll;

  constructor() { }

  ngOnInit() {
  }

  onPollCreated(newPoll: Poll) {
    this.newPoll = newPoll;
  }

}
