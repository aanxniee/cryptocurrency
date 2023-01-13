import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})

export class CoinDetailsComponent implements OnInit {

  coinData: any;
  coinId!: string;
  days: number = 1;
  currency: string = "CAD";

  constructor(private api : ApiService, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.coinId = val['id'];
    })
  
    this.getCoinData();
  }

  getCoinData() {
    this.api.getCurrencyById(this.coinId)
    .subscribe(res=>{
      this.coinData=res;
      console.log(this.coinData);
    })
  }
}
