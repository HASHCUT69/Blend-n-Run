# Development Setup Guide for Blend & Run Chrome Extension

This guide provides step-by-step instructions on setting up a local development environment for the Blend & Run Chrome Extension. It also includes an additional step to clone the `bililiteRange` repository, which is a required dependency of the extension. By following these steps, you can test and develop the extension on your local machine before deploying it to your browser.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

1. **Google Chrome Browser**: You'll need Google Chrome to test and load the extension.

2. **Git**: Install Git to clone the repository and manage version control.

## Getting Started

1. **Clone the Repository**:

   Clone the Blend & Run repository to your local machine using Git:

   ```bash
   git clone https://github.com/yourusername/BlendAndRun.git
   ```

   Replace `yourusername` with your GitHub username or the repository URL you intend to use.

2. **Clone the `bililiteRange` Repository**:

   The Blend & Run extension has a dependency on the `bililiteRange` library, which should be cloned into a folder called `bililiteRange` within the Blend & Run repository:

   ```bash
   cd bililiteRange
   git clone https://github.com/dwachss/bililiteRange.git
   ```

   This will create a `bililiteRange` folder within the Blend & Run directory.

3. **Navigate to the Extension Directory**:

   Change your working directory to the extension's folder:

   ```bash
   cd ..
   ```

4. **Load the Extension in Chrome**:

   Now, you'll need to load the extension locally in your Chrome browser:

   - Open Google Chrome.

   - Go to the `chrome://extensions/` URL.

   - Enable the "Developer mode" option in the upper-right corner.

   - Click the "Load unpacked" button.

   - Select the `extension` folder from the Blend & Run repository on your local machine.

   This will load the extension into your Chrome browser for local testing.

5. **Test the Extension**:

   You should now see the Blend & Run extension icon in your Chrome toolbar. Click the icon to open and test the extension.

## Making Changes

To make changes and improvements to the Blend & Run Chrome Extension, follow these steps:

1. Make your code modifications in the extension's source files located in the `extension` folder.

2. Reload the extension in Chrome to see your changes in action. You can do this by going to `chrome://extensions/`, finding the Blend & Run extension, and clicking the "Reload" button.

3. Test your changes thoroughly to ensure they work as expected.

## Debugging

For debugging and troubleshooting, you can utilize the Chrome Developer Tools. Right-click on the extension icon in your toolbar and select "Inspect" to open the DevTools panel for the extension.

## Deploying the Extension

The new versions of the extension will be deployed by the maintainers of the repository.

Remember to update the `manifest.json` file with the necessary dependencies, and make sure remotely hosted code isn't used anywhere in the project.

## Conclusion

You now have a local development environment set up for the Blend & Run Chrome Extension, including the `bililiteRange` dependency. You can make changes and test them locally before raising a PR. Happy coding!
