import { Component } from '@angular/core';
import { HeaderClick } from './header/headerClick.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: boolean = true;
  showShopping: boolean = false;

  onHeaderClick(event: HeaderClick){
    this.showRecipes = event.showRecipes;
    this.showShopping = event.showShopping;
  }

  title = 'template';
}
