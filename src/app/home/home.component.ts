import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { createFalse } from 'typescript';
import { CarouselService } from '../admin/carousel-settings/carousel.service';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // *ngFor="let image on images"


  images: any[] = [];
   //{ url: "https://picsum.photos/id/700/900/500", text: "Esimese pildi tekst", header: "Pildi pealkiri", alt: "Siin on esimen pilt" },
   //{ url: "https://picsum.photos/id/533/900/500", text: "Teise pildi tekst", header: "Teise pildi pealkiri", alt: "Siin on teine pilt" },
   //{ url: "https://picsum.photos/id/807/900/500", text: "Kolmanda pildi tekst", header: "Kolmanda pildi pealkiri", alt: "Siin on kolmas pilt" },
   //{ url: "https://picsum.photos/id/124/900/500", text: "Neljanda pildi tekst", header: "Neljanda pildi pealkiri", alt: "Siin on neljas pilt" },
    //]
// pean tõstma images välja Serivce-sse juhtudel, kus kasutan seda teises Componendis
//1. lisan pildi
//2. muudan, kustutan pilte
//3. kuvan teises Componendis ka välja 
//4. küsin teises Componendis mitu pilti mul on 




  items: Item[] = [];
  pauseOnHover = false;
  kuupaev = new Date();
  arv = 0.5;
  suurarv = 5000000;
  
  
  constructor(private cartService: CartService,
    private itemService: ItemService,
    private config: NgbCarouselConfig,
    private carouselService: CarouselService) {
     }
    

// KAKS COMPONENTI EI SAA OMAVAHEL OTSE SUHELDA
  ngOnInit(): void {
    // võtame Service-i seest andmed alles siis, 
    // kui meil neid vaja läheb

    // vaja läheb siis, kui kasutaja tuleb siia
    // componenti ja ilmub HTML ehk siis läheb
    // ngOnInit() käima
    this.images = this.carouselService.images;
    this.items = this.itemService.items;
    this.config.interval = 2500;
    this.config.wrap = true;
    this.config.keyboard = true;
    this.config.pauseOnHover = true;
  }
  
  
  onAddToCart(item: any){
    //this.items = [];
    //this.items.push(item);
    this.cartService.addToCart(item);
    console.log("lisasin ostukorvi");
    this.cartService.cartChanged.next(this.cartService.getItemsInCart());
  }

}
