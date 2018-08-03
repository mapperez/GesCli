import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-donut",
  templateUrl: "./donut.component.html"
})
export class DonutComponent implements OnInit {
  //Input Doughnut Ejes X Y
  @Input()
  ChartLabels: string[] = [];
  @Input() ChartData: number[] = [];

  ChartType: string = "doughnut";

  constructor() {}

  ngOnInit() {}
}
