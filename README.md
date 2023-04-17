# chrome-extension-boilerplate-react-webpack-sass
A skeleton "Hello World" Chrome Extension using React+Sass+Webpack

The boilerplate has Dev (webpack.dev.js) and Prod (webpack.prod.js) env of Webpack where you can add environment based configs along with a common `webpack.config.js` used across the environments.

Once you download, do the following to launch the chrome extension:
1. `npm i` to install the dependencies
2. To run the chrome extension on development mode: `npm run dev`. To run on production mode: `npm run build`. A `dist` folder should be generated in the root directory with `manifest.json`, `popup.html` and `popup.js`.
3. Once the `dist` is generated, you are ready to load it (unpacked) on the Chrome browser. Follow the official documentation on the steps involved: https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked
