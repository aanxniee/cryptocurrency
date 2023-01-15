import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cryptocurrency';
  selectedCurrency : string = "CAD";

  constructor(private currencySerivce : CurrencyService) { }

  sendCurrency(event:string) {
    console.log(event);
    this.currencySerivce.setCurrency(event);
  }
}
