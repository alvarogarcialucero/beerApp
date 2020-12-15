import { Component } from '@angular/core';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  beers:any[] = [];
  selectedFood:string;
  loading:boolean;

  constructor( private _beersService:BeersService) {
    this.selectedFood = "";
  }

  searchFood(e){
    this.loading = true;
    this.selectedFood = e.detail.value;
    console.log(this.selectedFood);
    this._beersService.getBeersByFood(this.selectedFood).subscribe( response => {      
     this.beers = response;
      this.loading = false;
    })
  }
}
