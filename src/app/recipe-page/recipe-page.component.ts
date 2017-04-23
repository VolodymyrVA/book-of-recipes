import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Service } from '../../shared/data-service/service'
import { NetworkService } from '../../shared/network/network-service'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipeComponent implements OnInit {
  recipe;

  constructor(private activateRouter: ActivatedRoute,private service: Service, private networkService : NetworkService) {
    this.activateRouter.params
      .subscribe((data: any) => {
        this.networkService.getRecipesFull(data.id)
          .subscribe((recipe) => {
            this.recipe = recipe
          })
      })
  }

  ngOnInit() {

  }

}
