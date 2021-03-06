import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from '../category/category.service';


@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  categories: string[] = [];

  constructor(private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    //this.categories = this.categoryService.categories;
    this.categoryService.getCategories().subscribe(categoriesFromDb => {
      this.categoryService.categories = [];
      for (const key in categoriesFromDb) {
        this.categories.push(categoriesFromDb[key].category);
        this.categoryService.categories.push( {id: key, category: categoriesFromDb[key].category});
        //categoriesFromDb[key].category;
      }
    });
  }

  onSubmit(form: NgForm ) { 
    console.log(form.value);
    this.itemService.items.push(form.value);
    if (form.valid) {
      //this.itemService.items.push(form.value);
      this.itemService.addItemToDatabase(form.value).subscribe();
    }
  }

}
