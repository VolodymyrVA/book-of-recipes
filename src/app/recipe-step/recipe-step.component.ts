import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {

  constructor() { }

  @Input() step;
  @Input() i;

  ngOnInit() {
  }

}
