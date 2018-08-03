import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html"
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = "Texto Leyenda";
  @Input() valuenow: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  // ViewChild('nombre') nombre : ElementRef
  @ViewChild("progreso") progreso: ElementRef;

  constructor() {
    console.log(this.leyenda);
    console.log(this.valuenow);
  }

  ngOnInit() {}

  CambioModelo(newValue: number) {
    if (newValue >= 100) {
      this.valuenow = 100;
    } else if (newValue <= 0) {
      this.valuenow = 0;
    } else {
      this.valuenow = newValue;
    }
    this.progreso.nativeElement.value = Number(this.valuenow);
    this.cambioValor.emit(newValue);

    //
  }
  CambiarValor(valor: number) {
    if (this.valuenow >= 100 && valor > 0) {
      this.valuenow = 100;
      return;
    }
    if (this.valuenow <= 0 && valor < 0) {
      this.valuenow = 0;
      return;
    }

    this.valuenow += valor;
    this.cambioValor.emit(this.valuenow);
    //fOCO
    this.progreso.nativeElement.focus();
  }

}
