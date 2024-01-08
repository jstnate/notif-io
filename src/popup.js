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
        this.position = position || 'center'; // Default value
        this.animationIn = animationIn || 'fadeIn'; // Default value
        this.animationOut = animationOut || 'fadeOut'; // Default value
        this.contentStyle = contentStyle || {}; // Default value
        this.popupElement = null;
    }

    /**
    * Shows the popup.
    */
    show() {
        // Create the popup element
        this.popupElement = document.createElement('div');
        this.popupElement.style.position = 'fixed';
        this.popupElement.style.top = this.position === 'center' ? '50%' : '0';
        this.popupElement.style.left = this.position === 'center' ? '50%' : '0';
        this.popupElement.style.transform = this.position === 'center' ? 'translate(-50%, -50%)' : '';
        Object.assign(this.popupElement.style, this.contentStyle);

        // Create the close button
        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', () => this.hide());

        // Add the text and close button to the popup
        this.popupElement.appendChild(document.createTextNode(this.text));
        this.popupElement.appendChild(closeButton);

        // Append the popup to the body
        document.body.appendChild(this.popupElement);
    }

    /**
    * Hides the popup.
    */
    hide() {
        if (this.popupElement) {
            document.body.removeChild(this.popupElement);
            this.popupElement = null;
        }
    }
}