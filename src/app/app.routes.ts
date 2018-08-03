import {RouterModule, Routes} from '@angular/router'

//Componentes
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes= [

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

  {path: 'login', component: LoginComponent  },
  {path: 'register', component: RegisterComponent  },
  {path: '**', component: NotfoundComponent  },


];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true})

