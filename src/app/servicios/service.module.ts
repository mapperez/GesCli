import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingService, PagesService, SharedService } from './service.index'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SettingService,
    PagesService,
    SharedService
  ]
})
export class ServiceModule { }
