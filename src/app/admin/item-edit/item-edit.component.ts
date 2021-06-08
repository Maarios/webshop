import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  editItemForm!: FormGroup;
  id: number = 0;
  // siin üleval on klassi muutujad
  //(vastand sellele on lokaalsed muutujad, mis on funktsioonide 
  // sees "let" algusega)
  //me võime kõik muutujad teha klassimuutujaks kui tahame
  //(midagi ei juhtu sellest)
  // viisakas/ilus/korrektne kood on selline, kui kasutame 
  // muutujat vaid ühes funktsioonis ja mitte HTML-S, TÕSTAME
  //selle lokaalseks muutujaks

  //klassimuutujat kasutame HTMLs ja /või kahes funktsioonis

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("itemId"));
    let item = this.itemService.items[this.id];
      
     

     this.editItemForm = new FormGroup ({
        title: new FormControl(item.title),
        price: new FormControl(item.price),
        imgSrc: new FormControl(item.imgSrc),
        category: new FormControl(item.category)
     })
  }

//NgForm - Template- driven form: tavaline vorm
//FormGroup - ReavtiveForm: sinna saab väärtusi sisse panna
 
  onSubmit(form: FormGroup ) { 
    console.log(form.value);
    this.itemService.items.push(form.value);
    if (form.valid) {
      
      //this.itemService.items.push(form.value);
      this.itemService.items[this.id] = form.value;
      this.itemService.saveItemsToDatabase().subscribe(() => { 
       console.log("ese muudetud ja andmebaasis");
       this.router.navigateByUrl("/admin/esemete-list");
       console.log("url muudetud");
      });
      //subscribe sisu tehakse alles siis kui päring on tehtud
   }
  }
  
  

}
