"use strict";

class ViewThermostat extends BaseDevice {
   constructor(thermos, rootElement) {
      super(thermos);
      this._thermos = thermos;
      this._rootElement = rootElement;
      this._state = document.createElement("div");
   }
   
   stateChange() {
      this._state.innerText = `Состояние: ${this._thermos.state ? "вкл." : "выкл."}`;
   }
   
   render() {

      let name = document.createElement("div");
      name.innerText = "Thermostat";

      let thermos = document.createElement("div");
      thermos.className = "thermostat";
      
      let temp = document.createElement("div");
      temp.innerText = `Темп.: ${this._thermos.currentTemp}`;
      
      let model = document.createElement("div");
      model.innerText = `Модель: ${this._thermos.model}`;
      
      let onBtn = document.createElement("button");
      onBtn.type = "button";
      onBtn.innerHTML = "Вкл.";
      onBtn.className = "on";
      onBtn.addEventListener("click", () => {
         this._thermos.on();
         this.stateChange();
         this.showTemp();
      });
      
      let offBtn = document.createElement("button");
      offBtn.type = "button";
      offBtn.innerHTML = "Выкл.";
      offBtn.className = "off";
      offBtn.addEventListener("click", () => {
         this._thermos.off();
         this.stateChange();
      });
      
      this.stateChange();
      thermos.appendChild(name);
      thermos.appendChild(this._state);
      thermos.appendChild(temp);
      thermos.appendChild(model);
      thermos.appendChild(onBtn);
      thermos.appendChild(offBtn);
      //this._rootElement.innerHTML = "";
      this._rootElement.appendChild(thermos);
   }
}