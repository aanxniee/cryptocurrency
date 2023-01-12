import { ApiService } from '../service/api.service';
import { OnInit, AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api : ApiService) {
    
  }
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.api.getCurrencyData("CAD")
    .subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
    })
  }

}
