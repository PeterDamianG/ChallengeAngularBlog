import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-base',
  styleUrls: ['table-base.component.css'],
  templateUrl: 'table-base.component.html',
})
export class TableBaseComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = [];
}
