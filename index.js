import Popup from "./src/popup.js";

const popup = new Popup({
  text: "Your text here",
  position: "center",
  animationIn: "fadeRight",
  animationOut: "fadeRight",
  contentStyle: { backgroundColor: "#ffffff", padding: "20px" },
});
popup.show();
