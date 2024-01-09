import Popup from "../src/popup";

describe("Popup", () => {
  let popup;

  beforeEach(() => {
    popup = new Popup({ text: "Test Popup" });
  });

  describe("show", () => {
    it("should create a popup element", () => {
      popup.show();
      expect(popup.popupElement).not.toBeNull();
    });

    it("should append the popup to the body", () => {
      popup.show();
      expect(document.body.contains(popup.popupElement)).toBeTruthy();
    });
  });
});
