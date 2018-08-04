import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { DashboradComponent } from "./dashborad/dashborad.component";
import { GraficasComponent } from "./graficas/graficas.component";
import { ProgressComponent } from "../shared/progress/progress.component";
import { AccsetingComponent } from "./accseting/accseting.component";
import { RxjsComponent } from "./rxjs/rxjs.component";



const pagesRoutes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent , data: {titulo: 'Inicio'} },
      {path: 'dashboard', component: DashboradComponent, data: {titulo: 'Dashborad'}  },
      {path: 'graficas', component: GraficasComponent, data: {titulo: 'Graficos'}  },
      {path: 'progres', component: ProgressComponent , data: {titulo: 'Progreso'} },
      {path: 'accountseting', component: AccsetingComponent , data: {titulo: 'Configuracion'} },
      {path: 'rxjs', component: RxjsComponent , data: {titulo: 'Rxjs'} },
      {path: '', redirectTo: 'home', pathMatch: 'full'  },
    ]
  },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
