import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableBaseComponent } from './components/table-base/table-base.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableBaseComponent],
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule],
  exports: [TableBaseComponent],
})
export class SharedModule {}
