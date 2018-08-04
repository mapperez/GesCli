import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class SettingService {
  config: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema: "default"
  };

  constructor( @Inject(DOCUMENT) private _document,) {
    this.getConfig()
  }

  saveConfig() {
    localStorage.setItem("config", JSON.stringify(this.config));
  }
  getConfig() {
    if (localStorage.getItem("config")) {
      this.config = JSON.parse(localStorage.getItem("config"));
      this.setConfig(this.config.tema);
    }else{
    this.setConfig(this.config.tema);
    }
  }
  setConfig(tema: string){

    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById('thema').setAttribute('href', url)
    this.config.tema = tema;
    this.config.temaUrl = url;
    this.saveConfig();


  }


}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
