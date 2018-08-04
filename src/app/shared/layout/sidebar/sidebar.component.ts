import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../servicios/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  constructor(
    public _sidebar: PagesService
  ) { }

  ngOnInit() {
  }

}
