import RenderToDOM from "./render-to-DOM";
import Makemsg from "./make-message";

const waitTime = new Promise((AllOk, AllBad) => {
  setTimeout(() => {
    AllOk("Hello from delay");
  }, 3000);
});

module.exports = {
  firstmessage: "I miss you spider ",
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message);
    RenderToDOM(Makemsg(message));
  }
};
