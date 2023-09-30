# Development Setup Guide for Blend & Run Chrome Extension

This guide provides step-by-step instructions on setting up a local development environment for the Blend & Run Chrome Extension. By following these steps, you can test and develop the extension on your local machine before deploying it to your browser.

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

2. **Navigate to the Extension Directory**:

   Change your working directory to the extension's folder:

   ```bash
   cd BlendAndRun
   ```

3. **Load the Extension in Chrome**:

   Now, you'll need to load the extension locally in your Chrome browser:

   - Open Google Chrome.

   - Go to the `chrome://extensions/` URL.

   - Enable the "Developer mode" option in the upper-right corner.

   - Click the "Load unpacked" button.

   - Select the `extension` folder from the Blend & Run repository on your local machine.

   This will load the extension into your Chrome browser for local testing.

4. **Test the Extension**:

   You should now see the Blend & Run extension icon in your Chrome toolbar. Click the icon to open and test the extension.

## Making Changes

To make changes and improvements to the Blend & Run Chrome Extension, follow these steps:

1. Make your code modifications in the extension's source files located in the `extension` folder.

2. Reload the extension in Chrome to see your changes in action. You can do this by going to `chrome://extensions/`, finding the Blend & Run extension, and clicking the "Reload" button.

3. Test your changes thoroughly to ensure they work as expected.

## Debugging

For debugging and troubleshooting, you can utilize the Chrome Developer Tools. Right-click on the extension icon in your toolbar and select "Inspect" to open the DevTools panel for the extension.

## Deploying the Extension

Once you are satisfied with your changes, you can package and publish the extension to the Chrome Web Store or share it with others. Refer to the [Chrome Extension Developer Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for detailed instructions on how to package and distribute your extension.

Remember to update the `manifest.json` file with the necessary details, such as the extension name, description, and version, before publishing it.

## Conclusion

You now have a local development environment set up for the Blend & Run Chrome Extension. You can make changes, test them locally, and then consider publishing the extension for wider use. Happy coding!
