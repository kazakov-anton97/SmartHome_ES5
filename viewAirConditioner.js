"use strict";

class ViewAirConditioner extends BaseDevice {
   constructor(aircond, rootElement) {
      super(aircond);
      this._aircond = aircond;
      this._rootElement = rootElement;
      this._state = document.createElement("div");
   }
   
   stateChange() {
      this._state.innerText = `Состояние: ${this._aircond.state ? "вкл." : "выкл."}`;
   }
   
   render() {

      let name = document.createElement("div");
      name.innerText = "AirConditioner";

      let aircond = document.createElement("div");
      aircond.className = "aircond";
      
      let temp = document.createElement("div");
      temp.innerText = `Темп.: ${this._aircond.currentTemp}`;
      
      let model = document.createElement("div");
      model.innerText = `Модель: ${this._aircond.model}`;
      
      let onBtn = document.createElement("button");
      onBtn.type = "button";
      onBtn.innerHTML = "Вкл.";
      onBtn.className = "on";
      onBtn.addEventListener("click", () => {
         this._aircond.on();
         this.stateChange();
      });
      
      let offBtn = document.createElement("button");
      offBtn.type = "button";
      offBtn.innerHTML = "Выкл.";
      offBtn.className = "off";
      offBtn.addEventListener("click", () => {
         this._aircond.off();
         this.stateChange();
      });

      let incTemp = document.createElement("button");
      incTemp.type = "button";
      incTemp.innerHTML = "Теплее";
      incTemp.className = "on";
      incTemp.addEventListener("click", () => {
         this._aircond.increaseTemp();
         temp.innerText = `Темп.: ${this._aircond.currentTemp}`;
      });

      let decTemp = document.createElement("button");
      decTemp.type = "button";
      decTemp.innerHTML = "Холоднее";
      decTemp.className = "off";
      decTemp.addEventListener("click", () => {
         this._aircond.decreaseTemp();
         temp.innerText = `Темп.: ${this._aircond.currentTemp}`;
      });
      
      this.stateChange();
      aircond.appendChild(name);
      aircond.appendChild(this._state);
      aircond.appendChild(temp);
      aircond.appendChild(model);
      aircond.appendChild(onBtn);
      aircond.appendChild(offBtn);
      aircond.appendChild(incTemp);
      aircond.appendChild(decTemp);
      //this._rootElement.innerHTML = "";
      this._rootElement.appendChild(aircond);
   }
}