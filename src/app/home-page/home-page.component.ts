import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Service} from '../../shared/data-service/service';


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {
  recipesData: any[];
  tempRecipeData: any [];
  constructor(private service: Service) {
    this.recipesData = [];
  }


  ngOnInit() {
    this.recipesData = this.service.getDish();
    this.selectRecipe();
  }

  selectRecipe(search?:string) {
    let searchRecipe = new RegExp((search || '').toLowerCase());

    this.tempRecipeData = this.recipesData.filter((rec) => {
      if (searchRecipe.test(rec.title.toLowerCase())) {
        return rec;
      }
    });
  }

}
