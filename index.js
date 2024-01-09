import Popup from "./src/popup.js";

const popup = new Popup({
  text: "Your text here",
  position: "center",
  animationIn: "fadeIn",
  animationOut: "fadeInReverse",
  contentStyle: { backgroundColor: "#ffffff", padding: "20px" },
});
popup.show();
