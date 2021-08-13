import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TableBaseComponent } from './components/table-base/table-base.component';
import { NotFoundComponent } from './components/error-page/not-found/not-found.component';

@NgModule({
  declarations: [TableBaseComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [TableBaseComponent, NotFoundComponent],
})
export class SharedModule {}
