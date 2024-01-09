# Popup Library Documentation

This is a JavaScript library for creating and managing popups. The library provides a `Popup` class that can be instantiated with various options to customize the behavior and appearance of the popup.

## Importing the Library

To use this library, you would first need to import it into your project. This could be done using ES6 import syntax:

Replace `'./path/to/Popup'` with the actual path to the `Popup` file in your project.

## Using the Library

After importing the library, you can create a new instance of the `Popup` class. The `Popup` constructor accepts an object with the following properties:

-   `text`: The text to display in the popup. Defaults to `"Your text here"`.
-   `position`: The position of the popup. Possible values are `'center'`, `'top'`, `'topLeft'`, `'topRight'`, `'centerLeft'`, `'centerRight'`, `'bottomLeft'`, `'bottom'`, or `'bottomRight'`. Defaults to `'center'`.
-   `animationIn`: The animation to use when showing the popup. Possible values are `'fadeIn'`, `'fadeLeft'`, or `'fadeRight'`. Defaults to `'fadeIn'`.
-   `animationOut`: The animation to use when hiding the popup. Possible values are `'fadeInReverse'`, `'fadeLeftReverse'`, or `'fadeRightReverse'`. Defaults to `'fadeInReverse'`.
-   `contentStyle`: An object representing the styles to apply to the popup content. Defaults to an empty object.

Here's an example of how to create a new `Popup`:

## Displaying the Popup

Once you've created a `Popup`, you can display it using the `show` method:

This will create a new popup element, apply the specified animations and styles, and append it to the body of the document.

## Hiding the Popup

To hide the popup, you can use the `hide` method:

This will apply the reverse animation to the popup and remove it from the DOM after the animation completes.

## Custom Animations

If you want to use a custom animation, you can define your own CSS keyframes and pass the name of the animation to the `setAnimation` method:

Please note that the animation must be defined in the `Popup` class's `css` property.

## Conclusion

That's it! With this library, you can easily create and manage popups in your JavaScript projects. Remember to replace `'Your text here'` and `'Hello, world!'` with your own text, and adjust the other options as needed to fit your project's requirements.
