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
  @Input() useThisURL: string = '';
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  isLoading: boolean = true;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.dataSource);
    this.dataSource.paginator = this.paginator;
    if (this.dataSource.filteredData.length) this.isLoading = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setURL(id: any): string | null {
    if (this.useThisURL) return `${this.useThisURL}/${id}`;
    if (id) return id;
    else return null;
  }
}
