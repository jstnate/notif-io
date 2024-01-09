/* global document */
export default class Popup {
  /**
   * Creates a new Popup.
   * @param {Object} options - The options for the popup.
   * @param {string} options.text - The text to display in the popup.
   * @param {string} [options.position='center'] - The position of the popup with possible values 'center', 'top', 'topLeft', 'topRight', 'centerLeft', 'centerRight', 'bottomLeft', 'bottom', or 'bottomRight'.
   * @param {string} [options.animationIn='fadeIn'] - The animation to use when showing the popup with possible values 'fadeIn', 'fadeLeft' or 'fadeRight'.
   * @param {string} [options.animationOut='fadeInReverse'] - The animation to use when hiding the popup with possible values 'fadeInReverse', 'fadeLeftReverse', or 'fadeRightReverse'.
   * @param {Object} [options.contentStyle={}] - The styles to apply to the popup content.
   */
  constructor({
    text = "Your text here",
    position = "center",
    animationIn = "fadeIn",
    animationOut = "fadeInReverse",
    contentStyle = {},
  }) {
    this.text = text;
    this.position = position; // Default value
    this.animationIn = animationIn; // Default value
    this.animationOut = animationOut; // Default value
    this.contentStyle = contentStyle; // Default value
    this.popupElement = null;
  }

  css = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeRight {
            from { opacity: 0; transform: translateX(100%) translateY(-50%); }
            to { opacity: 1; transform: translateX(-50%) translateY(-50%); }
        }

        @keyframes fadeLeft {
            from { opacity: 0; transform: translateX(-100%) translateY(-50%); }
            to { opacity: 1; transform: translateX(-50%) translateY(-50%); }
        }

        @keyframes fadeInReverse {
          from { opacity: 1; }
          to { opacity: 0; }
       }

       @keyframes fadeRightReverse {
          from { opacity: 1; transform: translateX(-50%) translateY(-50%); }
          to { opacity: 0; transform: translateX(100%) translateY(-50%); }
       }

       @keyframes fadeLeftReverse {
          from { opacity: 1; transform: translateX(-50%) translateY(-50%); }
          to { opacity: 0; transform: translateX(-100%) translateY(-50%); }
       }
    `;

  /**
   * Applies the specified animation to the popupElement.
   * @param {string} animation - The name of the animation to apply.
   */
  setAnimation(animation) {
    this.popupElement.style.animation = `${animation} 1s ease-in-out`;
    this.popupElement.style.animationFillMode = "forwards";
  }

  /**
   * Retrieves and applies the specified animation using the setAnimation method.
   * @param {string} animation - The name of the animation to retrieve and apply.
   */
  getAnimation(animation) {
    switch (animation) {
      case "fadeIn":
        this.setAnimation("fadeIn");
        break;
      case "fadeOut":
        this.setAnimation("fadeOut");
        break;
      case "fadeLeft":
        this.setAnimation("fadeLeft");
        break;
      case "fadeRight":
        this.setAnimation("fadeRight");
        break;
      case "fadeInReverse":
        this.setAnimation("fadeInReverse");
        break;
      case "fadeOutReverse":
        this.setAnimation("fadeOutReverse");
        break;
      case "fadeLeftReverse":
        this.setAnimation("fadeLeftReverse");
        break;
      case "fadeRightReverse":
        this.setAnimation("fadeRightReverse");
        break;
      default:
        console.error(`Invalid animationIn: ${animation}`);
    }
  }

  /**
   * Shows the popup with the initial animation applied.
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

    this.getAnimation(this.animationIn);

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
   * Hides the popup and removes it from the DOM after the specified animation.
   */
  hide() {
    if (this.popupElement) {
      this.getAnimation(this.animationOut);

      // Delay removal of popup element to allow animation to complete
      setTimeout(() => {
        document.body.removeChild(this.popupElement);
        this.popupElement = null;

        // Remove the style element that contains the keyframes
        let style = document.querySelector("style");
        if (style) {
          document.head.removeChild(style);
        }
      }, 1000);
    }
  }
}
