import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit {
  constructor() {
    this.regresaObservable().pipe(retry(2)).subscribe(
      // Recive de la callback Next
      resul => {
        console.log("Subs : " + resul);
      },
      // Recive de un calback error
      error => {
        console.log(error);
      },
      // Complete observable
      () => {
        console.log("Termino observable");
      }
    );
  }

  ngOnInit() {}

  regresaObservable(): Observable<Number> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);

        if (contador == 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador == 2) {
          clearInterval(intervalo);
          observer.error("Error culiao");
        }
      }, 1000);
    });
  }
}
