import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderClick } from './headerClick.model';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerClick = new EventEmitter<HeaderClick>(); 
  flagShowRecipes: boolean = true;
  flagShowShopping: boolean = true;

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipes(){
    this.flagShowRecipes = true;
    this.flagShowShopping = false;
    this.headerClick.emit(new HeaderClick(this.flagShowRecipes, this.flagShowShopping));
  }

  onClickShopping(){
    this.flagShowRecipes = false;
    this.flagShowShopping = true;
    this.headerClick.emit(new HeaderClick(this.flagShowRecipes, this.flagShowShopping));
  }

  onClickBrand(){
    this.flagShowRecipes = true;
    this.flagShowShopping = true;
    this.headerClick.emit(new HeaderClick(this.flagShowRecipes, this.flagShowShopping));
  }

}
