import "../css/estilos.css";
import message from "./message.js";
import platzi from "../images/platzi.png";
import DataJson from "./teachers.json";
import RenderToDom from "./render-to-DOM";

console.log(JSON.stringify(DataJson, null, 3));

DataJson.teachers.forEach(teachers => {
  const element = document.createElement("li");

  element.textContent = teachers.name;
  RenderToDom(element);
});

const img = document.createElement("img");
img.setAttribute("src", platzi);
img.setAttribute("width", 50);
img.setAttribute("heigth", 50);
document.body.append(img);
document.write(message.firstmessage);
message.delayedMessage();
