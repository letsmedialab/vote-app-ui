import { PollsService } from './../polls.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Poll } from '../poll';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-poll-add',
  templateUrl: './poll-add.component.html',
  styleUrls: ['./poll-add.component.css']
})
export class PollAddComponent implements OnInit {
  @Output() pollCreated = new EventEmitter<Poll>();
  poll: Poll;
  pollForm: FormGroup;

  constructor(private pollsService: PollsService) { }

  ngOnInit() {
    this.poll = new Poll();
    this.poll.options = [];
    this.pollForm = new FormGroup({
      'title': new FormControl(null),
      'options': new FormControl(null)
    });
  }

  create() {
    this.poll.title = this.pollForm.value.title;
    const lines = this.pollForm.value.options.split('\n');
    for (let i = 0; i < lines.length; i++) {
      this.poll.options.push(lines[i]);
    }
    this.pollsService.addPoll(this.poll)
      .subscribe((savedPoll) => {
        this.pollCreated.emit(savedPoll);
      }, err => {
        alert('please check connection and make sure server is running');
      }
    );
  }

}
