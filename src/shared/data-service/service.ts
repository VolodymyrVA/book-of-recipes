import {recipesData} from '../fake-data/recipesData'
import { IRecipes } from  '../interface/IRecipes'
import { Http } from '@angular/http'
import * as firebase from "firebase"



let config = {
  apiKey: "AIzaSyCnSp35_tpkIn9BywONl1UIXVoG0H3JJEE",
  authDomain: "book-of-recipes.firebaseapp.com",
  databaseURL: "https://book-of-recipes.firebaseio.com/",
  projectId: "book-of-recipes",
  storageBucket: "book-of-recipes.appspot.com",
  messagingSenderId: "411305115929"
};



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
