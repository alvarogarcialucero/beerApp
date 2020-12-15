import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor( private _http:HttpClient ) { }


  getBeersByFood(food:string) {
    
    let search = food !== "" ? food : "%27%27";

    return this._http.get(`https://api.punkapi.com/v2/beers?food=${search}`).pipe(map((data:any) => {

      const beers:any[] = [];

      data.map( beer => {
        let beerResponse:any = {
          'name': beer.name,
          'img': beer.image_url,
          'foods': beer.food_pairing
        };
        beers.push(beerResponse);
      })

      return beers;
    }));
  }

}
