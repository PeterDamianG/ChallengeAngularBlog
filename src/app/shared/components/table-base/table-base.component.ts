import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-base',
  styleUrls: ['table-base.component.css'],
  templateUrl: 'table-base.component.html',
})
export class TableBaseComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataSource);
  }
}
