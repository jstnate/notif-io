import Popup from "./src/popup.js";

const popup = new Popup({
  text: "Your text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour textYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text hereYour text here hereYour text hereYour text hereYour text hereYour text hereYour text here",
  position: "center",
  animationIn: "fadeIn",
  animationOut: "fadeInReverse",
  contentStyle: { backgroundColor: "#ffffff", padding: "20px" },
});
popup.show();
