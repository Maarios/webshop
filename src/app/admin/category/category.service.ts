import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = ["Iphone","Airpods","Ipad","Macbook"];

  constructor() { }
}
