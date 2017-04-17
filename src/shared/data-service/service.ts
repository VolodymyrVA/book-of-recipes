import {recipesData} from '../fake-data/recipesData'
import { IRecipes } from  '../interface/IRecipes'

export class Service {
  recipesData: IRecipes[] = recipesData;

  getRecipesFull(): any [] {
    return this.recipesData;
  }

  getRecipe(id) {
    return this.recipesData[id];
  }

  getDish(): any [] {
    let tempArr = [];
    recipesData.forEach((elem) => {
      let setup = {title: elem.title, imageUrl: elem.imageUrl};
      tempArr.push(setup)
    });
    return tempArr;
  }
}
