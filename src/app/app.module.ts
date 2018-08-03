import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { BreadcrumsComponent } from './shared/layout/breadcrums/breadcrums.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { RegisterComponent } from './register/register.component';



//Rutas


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    PagesComponent,
    HomeComponent,
    DashboradComponent,
    GraficasComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
