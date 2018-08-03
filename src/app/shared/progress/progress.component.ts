import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {


  MiValue: number=0;


  constructor() { }

  ngOnInit() {

  }


  cambioChange(ev){
   this.MiValue= ev;
  }


}
