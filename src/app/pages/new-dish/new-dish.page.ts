import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.page.html',
  styleUrls: ['./new-dish.page.scss'],
})
export class NewDishPage implements OnInit {

  ingredientsList: string[] = [];

  form!: FormGroup<any>;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      schedule: new FormControl('',  [Validators.required]),
      ingredient: new FormControl('',  [Validators.required]),
    })
  }

  addIngredient(){
    this.ingredientsList.push(this.form.value.ingredient)
  }

  deleteIngredient(ingredient: string){

  }

}
