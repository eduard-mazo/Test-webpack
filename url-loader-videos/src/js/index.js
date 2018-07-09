import "../css/estilos.css";
import message from "./message.js";
import platzi from "../images/platzi.png";
import videoPlat from "../video/que-es-core.mp4";

const img = document.createElement("img");
img.setAttribute("src", platzi);
img.setAttribute("width", 50);
img.setAttribute("heigth", 50);
document.body.append(img);

const video = document.createElement("video");
video.setAttribute("src", videoPlat);
video.setAttribute("width", 480);
// video.setAttribute("autoplay", true);
video.setAttribute("controls", false);
document.body.append(video);

document.write(message.firstmessage);
message.delayedMessage();
