import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';
import { Service } from '../../shared/data-service/service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() select = new EventEmitter();
  newRecipe: string = '';

  constructor(private service: Service) { }

  ngOnInit() {

  }

  onSelect(newRecipe) {
    this.select.emit(newRecipe);
    console.log(newRecipe);
  }

}
