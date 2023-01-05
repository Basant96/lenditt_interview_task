import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tableData } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'taskAngularBasant';
 
  from = '';
  to = '';
  displayedColumns: string[] = ['name', 'creation_date', 'type'];
  dataSource = new MatTableDataSource<any>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  filterTable() {
    this.dataSource = new MatTableDataSource<any>(
      tableData.filter((x) => {
        console.log('this.to', x.creation_date);
        if (
          new Date(x.creation_date) >= new Date(this.from) &&
          new Date(x.creation_date) <= new Date(this.to)
        ) {
          return true;
        }
      })
    );
  }

  formateDate(date: Date) {
    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    );
  }



  constructor() {

  }
  ngOnInit(): void {

  }


}
