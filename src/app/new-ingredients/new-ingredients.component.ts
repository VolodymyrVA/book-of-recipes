import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-ingredients',
  templateUrl: './new-ingredients.component.html',
  styleUrls: ['./new-ingredients.component.css']
})
export class NewIngredientsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ingredients: FormGroup;

  ngOnInit() {
    this.ingredients = this.fb.group({
      ingredients: ['', Validators.compose([
        Validators.required
      ])],

      quantity: ['', Validators.compose([
        Validators.required
      ])],

      units: ['', Validators.compose([
        Validators.required
      ])]

    });
  }

}
