import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  menu: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard',url: '/graficas'},
        {titulo: 'Registro',url: '/register'},
        {titulo: 'Login',url: '/login'}
      ]
    }
  ];

  constructor() { }
}
