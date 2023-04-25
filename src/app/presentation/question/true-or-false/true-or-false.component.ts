import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss'],
})
export class TrueOrFalseComponent implements OnInit {
  @Input() sentence!: string;
  @Input() options!: string[];
  @Output() optionsSelectedEvent = new EventEmitter<string[]>();
  optionsSelected!: string[];

  constructor() {}

  ngOnInit(): void {
    this.optionsSelected = [];
    this.sentence = 'sentence';
    this.options = ['option1', 'option2', 'option3', 'option4'];
  }

  chooseOption(option: string) {
    this.optionsSelected = [option];
    this.optionsSelectedEvent.emit(this.optionsSelected);
    console.log(this.optionsSelected);
  }
}
