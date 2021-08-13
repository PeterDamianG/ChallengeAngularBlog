import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { TableBaseComponent } from './components/table-base/table-base.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableBaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  exports: [TableBaseComponent],
})
export class SharedModule {}
