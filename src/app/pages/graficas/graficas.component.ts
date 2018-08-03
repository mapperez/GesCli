import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: []
})
export class GraficasComponent implements OnInit {



  DataLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  DataValues: number[] = [350, 450, 100];




  constructor() { }

  ngOnInit() {
  }




}
