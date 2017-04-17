import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Service } from '../../shared/data-service/service'
import { IRecipes } from '../../shared/interface/IRecipes'


@Component({
  selector: 'app-getrecipes',
  templateUrl: './getrecipes.component.html',
  styleUrls: ['./getrecipes.component.css']
})
export class GetrecipesComponent implements OnInit {
  recipe;

  constructor(private activateRouter: ActivatedRoute,private service: Service) {
    this.activateRouter.params
      .subscribe((data: any) => {
        this.loadRecipe(+data.id)
      })
  }

  ngOnInit() {

  }

  loadRecipe(id: number): void{
    if(typeof id === 'number'){
      this.recipe = this.service.getRecipe(id);
    }
  }

}
