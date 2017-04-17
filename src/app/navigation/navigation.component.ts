import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';
import { Service } from '../../shared/data-service/service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
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
