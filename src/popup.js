export default class Popup {
  /**
   * Creates a new Popup.
   * @param {Object} options - The options for the popup.
   * @param {string} options.text - The text to display in the popup.
   * @param {string} [options.position='center'] - The position of the popup. Can be 'center', 'topLeft', 'topRight', 'bottomLeft', or 'bottomRight'.
   * @param {string} [options.animationIn='fadeIn'] - The animation to use when showing the popup.
   * @param {string} [options.animationOut='fadeOut'] - The animation to use when hiding the popup.
   * @param {Object} [options.contentStyle={}] - The styles to apply to the popup.
   */
  constructor({ text, position, animationIn, animationOut, contentStyle }) {
    this.text = text;
    this.position = position || "center"; // Default value
    this.animationIn = animationIn || "fadeIn"; // Default value
    this.animationOut = animationOut || "fadeOut"; // Default value
    this.contentStyle = contentStyle || {}; // Default value
    this.popupElement = null;
  }

  css = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes fadeRight {
            from { opacity: 0; transform: translateX(100%) translateY(-50%); }
            to { opacity: 1; transform: translateX(-50%) translateY(-50%); }
        }
        
        @keyframes fadeLeft {
            from { opacity: 0; transform: translateX(-100%) translateY(-50%); }
            to { opacity: 1; transform: translateX(-50%) translateY(-50%); }
        }
    `;

  fadeIn() {
    this.popupElement.style.animation = "fadeIn 1s ease-in-out";
    this.popupElement.style.animationFillMode = "forwards";
  }

  fadeOut() {
    this.popupElement.style.animation = "fadeOut 1s ease-in-out";
    this.popupElement.style.animationFillMode = "forwards";
  }

  fadeLeft() {
    this.popupElement.style.animation = "fadeLeft 1s ease-in-out";
    this.popupElement.style.animationFillMode = "forwards";
  }

  fadeRight() {
    this.popupElement.style.animation = "fadeRight 1s ease-in-out";
    this.popupElement.style.animationFillMode = "forwards";
  }

  /**
   * Shows the popup.
   */
  show() {
    // Create the popup element
    this.popupElement = document.createElement("div");
    this.popupElement.style.position = "fixed";
    this.popupElement.style.transform =
      this.position === "center" ? "translate(-50%, -50%)" : "";
    this.popupElement.style.backgroundColor = "white";
    this.popupElement.style.padding = "20px";
    this.popupElement.style.borderRadius = "5px";
    this.popupElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    this.popupElement.style.minWidth = "200px";
    this.popupElement.style.minHeight = "100px";
    let style = document.createElement("style");
    style.innerHTML = this.css;
    document.head.appendChild(style);
    Object.assign(this.popupElement.style, this.contentStyle);

    switch (this.animationIn) {
      case "fadeIn":
        this.fadeIn();
        break;
      case "fadeOut":
        this.fadeOut();
        break;
      case "fadeLeft":
        this.fadeLeft();
        break;
      case "fadeRight":
        this.fadeRight();
        break;
      default:
        console.error(`Invalid animationIn: ${this.animationIn}`);
    }

    let top = "50%";
    let left = "50%";

    switch (this.position) {
      case "topLeft":
        top = "0";
        left = "0";
        break;
      case "top":
        top = "0";
        left = "50%";
        break;
      case "topRight":
        top = "0";
        left = "100%";
        break;
      case "centerLeft":
        top = "50%";
        left = "0";
        break;
      case "center":
        top = "50%";
        left = "50%";
        break;
      case "centerRight":
        top = "50%";
        left = "100%";
        break;
      case "bottomLeft":
        top = "100%";
        left = "0";
        break;
      case "bottom":
        top = "100%";
        left = "50%";
        break;
      case "bottomRight":
        top = "100%";
        left = "100%";
        break;
      default:
        console.error(`Invalid position: ${this.position}`);
    }

    this.popupElement.style.top = top;
    this.popupElement.style.left = left;
    this.popupElement.style.transform = "translate(-50%, -50%)";

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", () => this.hide());
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";

    // Add the text and close button to the popup
    this.popupElement.appendChild(document.createTextNode(this.text));
    this.popupElement.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(this.popupElement);
  }

  /**
   * Hides the popup.
   */
  /**
   * Hides the popup.
   */
  hide() {
    if (this.popupElement) {
      switch (this.animationOut) {
        case "fadeIn":
          this.fadeIn();
          break;
        case "fadeOut":
          this.fadeOut();
          break;
        case "fadeLeft":
          this.fadeLeft();
          break;
        case "fadeRight":
          this.fadeRight();
          break;
        default:
          console.error(`Invalid animationOut: ${this.animationOut}`);
      }

      setTimeout(() => {
        document.body.removeChild(this.popupElement);
        this.popupElement = null;
      }, 1000); // Adjust this timeout to match the duration of your animation

      // Remove the style element
      let style = document.querySelector("style");
      if (style) {
        document.head.removeChild(style);
      }
    }
  }
}
