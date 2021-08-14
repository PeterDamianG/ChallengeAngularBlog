import { ViewChild, Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-base',
  styleUrls: ['table-base.component.css'],
  templateUrl: 'table-base.component.html',
})
export class TableBaseComponent implements OnChanges {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.dataSource);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
