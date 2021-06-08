import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = this.itemServie.items;
    console.log("hakkan esemeid andmebaasist võtma")
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      console.log("esemed andmebaasist võetud")
      this.itemService.items = [];
      for (const key in itemsFromDb) {
        this.items.push(itemsFromDb [key]);
        this.itemService.items.push(itemsFromDb[key]);
      }
      //console.log(itemsFromDb);
      //this.items = itemsFromDb;
      //this.itemService.items = itemsFromDb;
    } );
  }

  onDeleteItem(i: any) {
    this.items.splice(i, 1);
    this.itemService.items.splice(i,1);
    this.onSaveItemsToDatabase();
  }

  onSaveItemsToDatabase() {
    this.itemService.saveItemsToDatabase().subscribe();
    
  }

  //service-i sees funktsioon käima panna 
  //ma ei saa otse HTMLST service-i sees olevat funktsiooni käima panna 

  //miks - HTML on seotud AINULT oma component.ts failiga

  //lahendus: HTML kutsub välja component.ts failis funktsippi välja 
  // component.ts kutsub service-i sees oleva funktsiooni välja 


}
