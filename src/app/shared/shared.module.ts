import { NgModule } from "@angular/core";

//Componentes Layout
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { BreadcrumsComponent } from "./layout/breadcrums/breadcrums.component";
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BreadcrumsComponent,NotfoundComponent],
  exports: [HeaderComponent, SidebarComponent, BreadcrumsComponent,NotfoundComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
