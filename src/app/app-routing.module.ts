import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/page/home/home.component';
import { NotFoundPageComponent } from './core/page/not-found/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'base' },
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
    data: { animation: 'bases' },
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/post/post.module').then((m) => m.PostModule),
    data: { animation: 'bases' },
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./modules/album/album.module').then((m) => m.AlbumModule),
    data: { animation: 'bases' },
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./modules/todo/todo.module').then((m) => m.TodoModule),
    data: { animation: 'bases' },
  },
  {
    path: '404',
    component: NotFoundPageComponent,
    data: { animation: 'bases' },
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
