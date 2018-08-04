import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { SettingService } from "../../servicios/service.index";

@Component({
  selector: "app-accseting",
  templateUrl: "./accseting.component.html"
})
export class AccsetingComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document,
    public seting: SettingService
  ) {}

  ngOnInit() {
    this.aplicarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.seting.setConfig(tema);
    setTimeout(() => {
      this.aplicarCheck();
    }, 200);
  }
  aplicarCheck() {
    let lista: any = document.getElementsByClassName("selector");
    let mytn = this.seting.config.tema;

    for(let refx of lista){
      refx.classList.remove("working");
    }

    for (let ref of lista) {
      ref.classList.remove("working");
      if (ref.getAttribute("data-theme") === mytn) {
        ref.classList.add("working");
        break;
      }
    }
  }
}
