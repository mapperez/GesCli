import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresbar',
  templateUrl: './progresbar.component.html'
})
export class ProgresbarComponent implements OnInit {


  @Input()  valuenow: number = 0;


  constructor() { }

  ngOnInit() {
  }


}
