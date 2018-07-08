import "../css/estilos.css";
import message from "./message.js";
import platzi from "../images/platzi.png";

const img = document.createElement("img");
img.setAttribute("src", platzi);
img.setAttribute("width", 50);
img.setAttribute("heigth", 50);
document.body.append(img);
document.write(message.firstmessage);
message.delayedMessage();
