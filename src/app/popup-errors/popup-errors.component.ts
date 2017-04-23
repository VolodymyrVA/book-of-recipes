import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../../shared/network/network-service'
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-popup-errors',
  templateUrl: './popup-errors.component.html',
  styleUrls: ['./popup-errors.component.css']
})
export class PopupErrorsComponent implements OnInit {
  onClose: boolean = false;
  reportErrors;

  constructor(private networkService: NetworkService) {

  }

  ngOnInit() {
    this.networkService.errors
      .subscribe(error => this.show());

    this.networkService.reportError
      .subscribe(text => this.reportErrors = text)
  }


  close() {
    return this.onClose = false;
  }

  show() {
    return this.onClose = true;
  }

}
