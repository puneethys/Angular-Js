import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe("A Test Recipe","This is simply a test",
    "https://storage.needpix.com/rsynced_images/recipe-2428926_1280.jpg"),
    new Recipe("A Test Recipe","This is simply a test",
    "https://live.staticflickr.com/5643/30102545481_54a2fdeeaa_b.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
