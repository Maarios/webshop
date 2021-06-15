import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(items: Item[]): string[] {
    return items.map(item => item.category) // ["camera","vein","camera","vein","camera","koer"]
     .filter((value, index, array) =>
      array.indexOf(value) == index);
 };

// [{ese},{title:"asda",category:"midagi"},{ese}]
//näide: [1,2,3].map(number => number*2)
// saan massiivi [2,4,6]

// näide2:[{ese},{title:"asda",category:"midagi"},{ese}]
// .map (item=> item.title)
// saan massiivi pealkirjadest

// näide3: [{ese},{title:"asda",category:"midagi"},{ese}]
// .map(item => ({...item, isActive: true}))
// ühel esemel: title,price,category,imgSrc
// pärast mapi on title,price,category,imgSrc,isActive


// .filter((element, järiekorranumber, massiiv) => {})
// ["camera","vein","camera","vein","camera","koer"]
//element     järiekorranumber       massiiv
//1.                0                ["camera","vein","camera","vein","camera","koer"]
//2.                1                ["camera","vein","camera","vein","camera","koer"]
//3.                2                ["camera","vein","camera","vein","camera","koer"]
//4.                3                ["camera","vein","camera","vein","camera","koer"]
//5.                4                ["camera","vein","camera","vein","camera","koer"]
//6.                5                ["camera","vein","camera","vein","camera","koer"]


// indexOF TÄHENDAB tagastatakse esimese leitava indeks massiivis
//massiiv.indexOf(camera)------ 0
//massiiv.indexOf(vein)------ 1
//massiiv.indexOf(camera)------ 0
//massiiv.indexOf(vein)------ 1
//massiiv.indexOf(camera)------ 0
//massiiv.indexOf(koer)------ 5





// .map abil muudetakse massiivi
// .filter abil jäetakse kindlad väärtused alles
// .indexOf küsib järiekorranumbrit


}
