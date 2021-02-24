import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  selected: any;
  currencies: any;
  rates: any;

  constructor(private api: ApiService)
  {}


  ngOnInit(){
    this.api.GetCurrency().subscribe((res: any) => {
      this.currencies = res;
      console.log('data response', this.currencies);
    });
  }


  changeCurrency(e: any){

    this.selected=e.target.value;

    this.api.GetCurrencyExchange(this.selected).subscribe((res: any) => {
     
      this.rates=res.rates;
      console.log('response', res.rates);
    });

  }

  
}
