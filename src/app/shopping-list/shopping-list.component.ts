import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  newIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  deleteIngredient(ingredient:Ingredient){
    let ingredentExists = this.ingredients.some((ing)=>{ return ing.name===ingredient.name; });
    if(ingredentExists==false){
      return;
    }
    let ingredentIndex = this.ingredients.findIndex((ing)=>{ return ing.name===ingredient.name });
    let selectedIng = this.ingredients[ingredentIndex];
    if(!ingredient.amount || ingredient.amount >= selectedIng.amount){
      this.ingredients.splice(ingredentIndex, ingredentIndex+1)
    }else{
      selectedIng.amount -= ingredient.amount;
    }
  }

}
