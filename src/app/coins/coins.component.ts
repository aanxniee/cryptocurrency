import { ApiService } from '../service/api.service';
import { OnInit, AfterViewInit, Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  currency : string = "CAD";
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api : ApiService, private router : Router, private currencyService : CurrencyService) {
    
  }
  ngOnInit(): void {
    this.getAllData();
    this.currencyService.getCurrency()
    .subscribe(val=>{
      this.currency = val;
      this.getAllData();
    })
  }

  getAllData() {
    this.api.getCurrencyData(this.currency)
    .subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event : Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToDetails(row : any) {
    this.router.navigate(['coin-details', row.id])
  }
}
