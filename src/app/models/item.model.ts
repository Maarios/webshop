export class Item {
    constructor(
        public title: string,
        public price: number,
        public imgSrc: string,
        public category: string,
        public id: number,
    ) {}
}

// kooondada kokku need kohad kus kirjutasime pikalt objekti välja 

// {title: string, price:.....}
//Item

// {title: string, price:.....}[]
//Item

//1. Kui teeme muutuse, muutub kõikjal korraga
//2. Ei riiva silma pikalt välja kirjutatud rodu- kui on 20 väärtust, siis on väga pikk
//3. Näeme kohe esimese pilguga, et on täpselt samad objektid