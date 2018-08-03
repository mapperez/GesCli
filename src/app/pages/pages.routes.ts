import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { DashboradComponent } from "./dashborad/dashborad.component";
import { GraficasComponent } from "./graficas/graficas.component";



const pagesRoutes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent  },
      {path: 'dashboard', component: DashboradComponent  },
      {path: 'graficas', component: GraficasComponent  },
      {path: '', redirectTo: 'home', pathMatch: 'full'  },
    ]
  },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
