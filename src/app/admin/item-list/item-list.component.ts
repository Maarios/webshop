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

  constructor(private itemServie: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemServie.items;
  }

  onDeleteItem(i: any) {
    this.itemServie.items.splice(i,1);
  }

}
