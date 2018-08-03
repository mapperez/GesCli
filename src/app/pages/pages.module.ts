
import { NgModule } from '@angular/core';

//Componente

import { HomeComponent } from './home/home.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';




@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DashboradComponent,
    GraficasComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    HomeComponent,
    DashboradComponent,
    GraficasComponent
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
