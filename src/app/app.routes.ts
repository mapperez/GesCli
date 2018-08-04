import {RouterModule, Routes} from '@angular/router'

//Componentes
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes= [
  {path: 'login', component: LoginComponent , data: {titulo: 'Login'} },
  {path: 'register', component: RegisterComponent, data: {titulo: 'Registro'}  },
  {path: '**', component: NotfoundComponent  },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true})

