import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms'

//Componentes Layout
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { BreadcrumsComponent } from "./layout/breadcrums/breadcrums.component";
import { NotfoundComponent } from './notfound/notfound.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgresbarComponent } from './components/progresbar/progresbar.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { DonutComponent } from './charts/donut/donut.component';



// Componentes terceros
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BreadcrumsComponent,NotfoundComponent, ProgressComponent, ProgresbarComponent, IncrementadorComponent, DonutComponent],
  imports: [FormsModule,ChartsModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NotfoundComponent,
    ProgressComponent,
    FormsModule,
    DonutComponent,
    ChartsModule],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
