import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item!: Item;
// Hüüumärgiga ei taha väärtust anda, annan väärtuse hiljem

//ActivatedRouter on node_module sees asuv erline klass,
//MIS VÕIMALDAB URLi muutuja kätte saada
  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    //ActivatedRoute teeb pildi (snapshot), võtab võti-väärtuste
    //paaride seas sellise, mille võti on "itemId"
    //VÕTI tuleb app-routing.module.ts failist,kooloni järel
    
    
    let id = this.route.snapshot.paramMap.get("itemId");
    
    
    
    //let on lokaakne muutuja, ta ei paista funktsioonist väljapoole
    
    
    
    if (id){
      
      
      // castimine numbriks-URList saadakse string ehk sõnaline muutuja
      
      
      //this.item = this.itemService.items[Number(id)];
      let item = this.itemService.items.find(item => item.id == Number(id));
      if (item) {
        this.item = item;
      }
      
      
      //massiivist saan konkreetse IDga ehk indeksiga väärtuse kätte
      //kui küsin sellelt massiivilt kandiliste sulgude kaudu:
      //massiiv[0] tähendab esimne väärtus sellest massiivist 
    }
    console.log(id);
  }

}
