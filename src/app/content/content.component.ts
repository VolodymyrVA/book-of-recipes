import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Service} from '../../shared/data-service/service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  resipesData: any[];

  constructor(private service: Service) {
    this.resipesData = [];
  }


  ngOnInit() {
    this.resipesData = this.service.getDish();
  }

  selectRecipe(recipe) {
    let searchRecipe = new RegExp(recipe.toLowerCase()),
          tempArr: string[] = [];

    if (recipe) {
      this.resipesData.forEach((rec) => {
        if (searchRecipe.test(rec.title.toLowerCase())) {
          tempArr.push(rec);
        }
      });
      this.resipesData = tempArr;
    } else {
      this.resipesData = this.service.getDish();
    }

  }

}
