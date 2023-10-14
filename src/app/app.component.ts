import { Component, OnInit } from '@angular/core';
import { ICoin } from './models/money/money.module';
import { MoneyService } from './services/money.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Converter';

  cash: ICoin[]
  loading: boolean = true  

  codes: Record<number,string> = {
    840 : "USD",
    978 : "EUR",
    980 : "UAH"
  }

  currency: Record<string, number> = {
    980980 : 1,
  }
  
  constructor(private moneyService: MoneyService){
  }

  ngOnInit(): void{
    this.moneyService.getAll().subscribe(prices=>{
        for (let x in [0,1,2]){
        this.currency[String(prices[x].currencyCodeB)+String(prices[x].currencyCodeA)] = 1/prices[x].rateSell //creating a dictionary where as example buying dollars for 
        this.currency[String(prices[x].currencyCodeA)+String(prices[x].currencyCodeB)] = prices[x].rateBuy // hryvnia is UAHUSD or 980840
    }
      this.currency["840840"] = this.currency["840980"] * this.currency["980840"]
      this.currency["978978"] = this.currency["978980"] * this.currency["980978"]
      this.cash = prices.slice(0,2)
      this.loading = false
    }) 
  }
}