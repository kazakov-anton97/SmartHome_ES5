"use strict";

class ViewCamera extends BaseDevice {
   constructor(camera, rootElement) {
      super(camera);
      this._camera = camera;
      this._rootElement = rootElement;
      this._state = document.createElement("div");
      this._status = document.createElement("div");
      this._mode = document.createElement("div");
   }
   
   stateChange() {
      this._state.innerText = `Состояние: ${this._camera.state ? "вкл." : "выкл."}`;
   }

   statusChange() {
   	  this._status.innerText = `Статус: ${this._camera.status ? "record" : "live"}`;
   } 

   modeChange() {
   	  this._mode.innerText = `Режим: ${this._camera.mode ? "day" : "night"}`;
   }
   
   render() {

   	  let name = document.createElement("div");
      name.innerText = "Camera";

      let camera = document.createElement("div");
      camera.className = "camera";

      let status = document.createElement("div");
      status.innerText = `Статус: ${this._camera.status}`;

      let mode = document.createElement("div");
      mode.innerText = `Режим: ${this._camera.mode}`;
      
      let model = document.createElement("div");
      model.innerText = `Модель: ${this._camera.model}`;
      
      let onBtn = document.createElement("button");
      onBtn.type = "button";
      onBtn.innerHTML = "Вкл.";
      onBtn.className = "on";
      onBtn.addEventListener("click", () => {
         this._camera.on();
         this.stateChange();
      });
      
      let offBtn = document.createElement("button");
      offBtn.type = "button";
      offBtn.innerHTML = "Выкл.";
      offBtn.className = "off";
      offBtn.addEventListener("click", () => {
         this._camera.off();
         this.stateChange();
      });

      let record = document.createElement("button");
      record.type = "button";
      record.innerHTML = "record";
      record.className = "on";
      record.addEventListener("click", () => {
        this.statusChange();
        this._camera.recordStatus();
        status.innerText = `Статус: ${this._camera.status}`;
      });

      let live = document.createElement("button");
      live.type = "button";
      live.innerHTML = "live";
      live.className = "off";
      live.addEventListener("click", () => {
         this.statusChange();
         this._camera.liveStatus();
         status.innerText = `Статус: ${this._camera.status}`;
      });

	  let night = document.createElement("button");
      night.type = "button";
      night.innerHTML = "night";
      night.className = "on";
      night.addEventListener("click", () => {
      	 this._camera.nightMode();
      	 this.modeChange();
      });

      let day = document.createElement("button");
      day.type = "button";
      day.innerHTML = "day";
      day.className = "off";
      day.addEventListener("click", () => {
         this._camera.dayMode();
         this.modeChange();
      });

      this.stateChange();
      this.statusChange();
      this.modeChange();
      camera.appendChild(name);
      camera.appendChild(this._state);
      camera.appendChild(this._status);
      camera.appendChild(this._mode);
      camera.appendChild(model);
      camera.appendChild(onBtn);
      camera.appendChild(offBtn);
      camera.appendChild(record);
      camera.appendChild(live);
      camera.appendChild(night);
      camera.appendChild(day);
      //this._rootElement.innerHTML = "";
      this._rootElement.appendChild(camera);
   }
}
