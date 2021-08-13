import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBaseComponent } from './components/table-base/table-base.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TableBaseComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [TableBaseComponent],
})
export class SharedModule {}
