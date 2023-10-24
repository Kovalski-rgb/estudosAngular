import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') ingredientName : ElementRef;
  @ViewChild('amountInput') ingredientAmount : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onNewIngredient(){
    this.ingredientAdded.emit(new Ingredient(
      this.ingredientName.nativeElement.value, 
      this.ingredientAmount.nativeElement.value
    ));
  }

  onDelete(){
    this.ingredientDeleted.emit(new Ingredient(
      this.ingredientName.nativeElement.value, 
      this.ingredientAmount.nativeElement.value
    ));
  }

  onClear(){
    this.ingredientName.nativeElement.value = ""
    this.ingredientAmount.nativeElement.value = ""
  }

}
