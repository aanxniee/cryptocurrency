import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

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

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',

      }
    ],
    labels: []
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: true },
    }
  };
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;


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

  getGraphData() {
    this.api.getGraphCurrencyData(this.coinId, "CAD", 1)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
