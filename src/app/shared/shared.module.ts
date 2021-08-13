import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBaseComponent } from './components/table-base/table-base.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableBaseComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableBaseComponent],
})
export class SharedModule {}
