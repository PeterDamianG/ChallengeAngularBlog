import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TodosComponent } from './page/todos.component';
import { TodosDetailsComponent } from './page/todo-details/todos-details.component';

@NgModule({
  declarations: [TodosComponent, TodosDetailsComponent],
  imports: [
    TodoRoutingModule,
    SharedModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class TodoModule {}
