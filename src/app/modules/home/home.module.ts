import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home.routing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, MatGridListModule, MatCardModule],
})
export class HomeModule {}
