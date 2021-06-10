import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: {id: string, category: string}[] = [];
  url = "https://omis-webshop-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

  saveCategories() {
    return this.http.put(this.url, this.categories);
  }
    // firebase = [{ threbeirwuhg  :{ category:"Iphone" } },{ erfgrewgrtrwtg } ]
    // for (cost key in firebase)
    // firebase[key] -------- firebase["rthgiurthgiurth"]
    // annab mulle: { category:"iphone"}
    // .category ------ "iphone"
    // }
  getCategories() {
    return this.http.get<{ category: string }[]>(this.url);
  }

  addCategory(category: string) {
    return this.http.post(this.url, { "category" : category});
  }

}
