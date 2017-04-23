import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NetworkService} from '../../shared/network/network-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {
  recipesData: any[];
  tempRecipeData: any [];

  constructor(private networkService: NetworkService) {
    this.recipesData = [];
    this.tempRecipeData = [];
  }

  ngOnInit() {
    this.networkService
      .getShort()
      .map((data) => {
        let result = [];
        for (let key in data) {
          result.push(Object.assign({key: key}, data[key]))
        }
        return result;
      })
      .subscribe(recipesData => {
        this.recipesData = recipesData;
        this.selectRecipe();
      });
  }

  selectRecipe(search?: string) {
    let searchRecipe = new RegExp((search || '').toLowerCase());

    this.tempRecipeData = this.recipesData.filter((rec) => {
      if (searchRecipe.test(rec.title.toLowerCase())) {
        return rec;
      }
    });
  }

}
