var ViewCamera = function (camera, rootElement) {
   this._camera = camera;
   this._rootElement = rootElement;
   this._state = document.createElement("div");
   this._status = document.createElement("div");
   this._mode = document.createElement("div");
   

   ViewCamera.prototype.stateChange = function () { 
         this._state.innerText = "Состояние: " + (this._camera._state ? "вкл." : "выкл.");
      };

   ViewCamera.prototype.statusChange = function () {
         this._status.innerText = "Статус: " + (this._camera._status ? "record" : "live");
      };
   ViewCamera.prototype.modeChange = function () {
         this._mode.innerText = "Режим: " + (this._camera._mode ? "day" : "night");
      }
   ViewCamera.prototype.render = function () {

         var name = document.createElement("div");
         name.innerText = "Camera";

         var camera = document.createElement("div");
         camera.className = "camera";

         var status = document.createElement("div");
         status.innerText = "Статус: " + this._camera._status;

         var mode = document.createElement("div");
         mode.innerText = "Режим: " + this._camera._mode;

         var model = document.createElement("div");
         model.innerText = "Модель: " + this._camera._model;

         this._onBtn = document.createElement("button");
         this._onBtn.type = "button";
         this._onBtn.innerHTML = "Вкл.";
         this._onBtn.className = "on";
         this._onBtn.addEventListener("click", function () {
            this._camera.on();
            this.stateChange();
         });

         this._offBtn = document.createElement("button");
         this._offBtn.type = "button";
         this._offBtn.innerHTML = "Выкл.";
         this._offBtn.className = "off";
         this._offBtn.addEventListener("click", function () {
            this._camera.off();
            this.stateChange();
         });

         this._record = document.createElement("button");
         this._record.type = "button";
         this._record.innerHTML = "record";
         this._record.className = "on";
         this._record.addEventListener("click", function () {
            this.statusChange();
            this._camera.recordStatus();
            status.innerText = "Статус: " + this._camera.status;
         });

         this._live = document.createElement("button");
         this._live.type = "button";
         this._live.innerHTML = "live";
         this._live.className = "off";
         this._live.addEventListener("click", function () {
            this.statusChange();
            this._camera.liveStatus();
            status.innerText = "Статус: " + this._camera.status;
         });

         this._night = document.createElement("button");
         this._night.type = "button";
         this._night.innerHTML = "night";
         this._night.className = "on";
         this._night.addEventListener("click", function () {
            this._camera.nightMode();
            this.modeChange();
         });

         this._day = document.createElement("button");
         this._day.type = "button";
         this._day.innerHTML = "day";
         this._day.className = "off";
         this._day.addEventListener("click", function () {
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
         camera.appendChild(this._onBtn);
         camera.appendChild(this._offBtn);
         camera.appendChild(this._record);
         camera.appendChild(this._live);
         camera.appendChild(this._night);
         camera.appendChild(this._day);
         //this._rootElement.innerHTML = "";
         this._rootElement.appendChild(camera);
      };
}