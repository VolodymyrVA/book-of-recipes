import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-step',
  templateUrl: './new-step.component.html',
  styleUrls: ['./new-step.component.css']
})
export class NewStepComponent implements OnInit {
  step: FormGroup;
  @Output() urlStep = new EventEmitter();
  @Output() discriptionStep = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.step = this.fb.group({
      urlStep: ['', Validators.compose([
        Validators.required
      ])],

      descriptionStep: ['', Validators.compose([
        Validators.required
      ])]

    });
  }

  getDescription(descriptionValue: string) {
    this.discriptionStep.emit(descriptionValue);
  }

  getUrl(urlValue: string) {
    this.urlStep.emit(urlValue);
  }


}
