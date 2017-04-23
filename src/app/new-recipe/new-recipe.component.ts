import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  newPage: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newPage = this.fb.group({

      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(25)
      ])],

      imageUrl: ['', Validators.compose([
        Validators.required
      ])],

      discriptionRecipeTitle: ['', Validators.compose([
        Validators.required
      ])],

      description: ['', Validators.compose([
        Validators.required
      ])],

      time: ['', Validators.compose([
        Validators.required
      ])],

    });

  }

  getUrlStep(url: string) {
    console.log(url);
  }

  getDescriptionStep(description: string) {
    console.log(description);
  }

}
