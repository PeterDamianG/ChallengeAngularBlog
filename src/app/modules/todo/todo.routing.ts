import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './page/todos.component';
import { TodosDetailsComponent } from './page/todo-details/todos-details.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: ':id',
    component: TodosDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
