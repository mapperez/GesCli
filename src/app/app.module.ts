import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Componentes Raiz
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//Modulos
import {PagesModule} from './pages/pages.module'

//Rutas
import { APP_ROUTES } from './app.routes';

// Services
import {ServiceModule} from './servicios/service.module'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
