"use strict";

let addBtn = document.getElementById("add");
      addBtn.className = "add";
      addBtn.addEventListener("click", () => {
      let AC = new AirConditioner("Samsung");
      let VAC = new ViewAirConditioner(AC, document.getElementById("root"));
	VAC.render();
      });

let addBtn2 = document.getElementById("addCam");
      addBtn2.className = "addCam";
      addBtn2.addEventListener("click", () => {
      let C = new Camera("Canon");
      let VC = new ViewCamera(C, document.getElementById("root"));
      VC.render();
      });

let addBtn3 = document.getElementById("addTherm");
      addBtn3.className = "addTherm";
      addBtn3.addEventListener("click", () => {
      let T = new Thermostat("Philips");
      let VT = new ViewThermostat(T, document.getElementById("root"));
      VT.render();
      });

let delBtn = document.getElementById("delete");
      delBtn.className = "delete";
      delBtn.addEventListener("click", () => {
      root.innerHTML = "";
      });
