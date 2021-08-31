import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Api } from 'src/app/interfaces/api';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reto2',
  templateUrl: './reto2.component.html',
  styleUrls: ['./reto2.component.scss']
})
export class Reto2Component implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<Api> = new MatTableDataSource<Api>();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  constructor(private _api:DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this._api.getAll().subscribe(response => {
      if(response) {
        this.dataSource.data = response;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
