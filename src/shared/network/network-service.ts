import {Injectable, OnInit} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { IRecipes } from  '../interface/IRecipes'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'
import {Http, Headers, RequestOptions} from '@angular/http'
import { recipesData } from '../fake-data/recipesData'
import {Subject} from "rxjs/Subject";

@Injectable()
export class NetworkService implements OnInit {
  errors = new Subject;
  reportError = new Subject;

  config = {
    apiKey: "AIzaSyCnSp35_tpkIn9BywONl1UIXVoG0H3JJEE",
    authDomain: "book-of-recipes.firebaseapp.com",
    databaseURL: "https://book-of-recipes.firebaseio.com/",
    projectId: "book-of-recipes",
    storageBucket: "book-of-recipes.appspot.com",
    messagingSenderId: "411305115929",


    shortUrl: "https://book-of-recipes.firebaseio.com/reciepess/short.json",
    fullUrl: "https://book-of-recipes.firebaseio.com/reciepess/"
  };

  recipeSetup: IRecipes[];

  constructor(private http: Http) {

  }

  ngOnInit() {

  }

  getRecipesFull(key){

    return this.http.get(this.config.fullUrl+'full/'+key+'.json')
      .map(res => res.json())
      .map(data => data[Object.keys(data)[0]])
      .catch(this.handleError.bind(this))
  }

  getShort() {
    return this.http.get(this.config.shortUrl)
      .map(res => res.json())
      .catch(this.handleError.bind(this))
  }

  createRecipeFull() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    let tempArr = [];
    let key = [
      '-KiFroVdgMIoBbz4Iwmp',
      '-KiFroXtpTuZVkeLNeJW',
      '-KiFroXwI7SDhQdeDbS6',
      '-KiFroY-SyYHAbZw5z1S',
      '-KiFroY1yFd1SP28YF_r',
      '-KiFroY2fy9Hzmwa3cRI',
      '-KiFroY7xnlFvZO4NlqH',
      '-KiFro_FNNjAeK_sk3LX',
    ],
    i=0;

    /*recipesData.forEach((recipe) =>{
      let tempObj = {};
      for(let key in recipe) {

        if(key == 'title' || key == 'imageUrl' || key == 'discriptionRecipeTitle' ){
          tempObj[key] = recipe[key];
        }

      }
      tempArr.push(tempObj)
    });*/

    key.forEach((key) => {

      let tempRec = JSON.stringify(recipesData[i]);

      console.log(recipesData[i])
      this.http.post(`https://book-of-recipes.firebaseio.com/reciepess/full/${key}.json`, tempRec)
        .subscribe(
          () => {}
        );


      /*this.http.post("https://book-of-recipes.firebaseio.com/reciepess/short.json", tempRec)
       .subscribe(
       () => {}
       )*/


      i++;

    })

  }

  createRecipeShort(obj) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });

    this.http.post(this.config.shortUrl, obj, options)
  }

  private handleError(error: any) {
    let errorReason = JSON.parse(error._body);
    this.errors.next(error);
    this.reportError.next(errorReason.error);
    return Observable.throw(error.message || error);
  }

}
