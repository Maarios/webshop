import { Injectable } from '@angular/core';
import { CarouselImage } from 'src/app/models/carousel-image.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  images: CarouselImage[] = [
    { url: "https://picsum.photos/id/700/900/500", text: "Esimese pildi tekst", header: "Pildi pealkiri", alt: "Siin on esimen pilt" },
    { url: "https://picsum.photos/id/533/900/500", text: "Teise pildi tekst", header: "Teise pildi pealkiri", alt: "Siin on teine pilt" },
    { url: "https://picsum.photos/id/807/900/500", text: "Kolmanda pildi tekst", header: "Kolmanda pildi pealkiri", alt: "Siin on kolmas pilt" },
    { url: "https://picsum.photos/id/124/900/500", text: "Neljanda pildi tekst", header: "Neljanda pildi pealkiri", alt: "Siin on neljas pilt" },
    ];

    carouselSettings = {
      interval: 5000, 
      wrap: true,
      keyboard: true,
      pauseOnHoover: true
     };

     //objektile annan väätusi:            CarouselSettingsComponent
     //carouselSettings.interval = 10000;
     //   anname vormi seest väärtusi ehk form.value.interval;

     //objektilt võtan väärtusi:            HomeComponent
     //muutuja = carouselSettings.interval;

  constructor() { }
}
