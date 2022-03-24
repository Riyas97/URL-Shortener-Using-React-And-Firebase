# URL Shortener Application using React And Firebase

<br></br>

![Project Preview](./docs/imgs/preview_img.png)

## Introduction
This is an URL shortener application, designed and implemented using React and Firebase. The purpose of the application is to generate a shortened URL given a normal valid URL, that will arrive at the full URL without further clicks. The application is currently hosted [here](https://url-shortener-react-72986.web.app/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demonstration
To view a video demonstration of the application, please click [here](https://www.youtube.com/watch?v=6HFjeQhXnCw).

## Features
- Allows users to enter a normal URL and generates a corresponding shorter URL, that will arrive at the full URL without further clicks
- Along with displaying the shorter URL, also has a button for users to copy the generated shortened URL to the clipboard
- Also comes with a QR code (which stores the shortened URL) that users can scan to access the full URL without any further actions
- Deployed real-time using Firebase

## Deployment
As written above, to access the application online, please click [here](https://url-shortener-react-72986.web.app/).

## Pseudocode
1. The application will first display the homepage where users have to enter a URL and click the respective button to generate a shortened URL.
2. The application will then verify whether the specified URL is valid. If the specified URL is invalid, the application generates an alert box with the respective message.
3. If the specified URL is valid, the application generates a corresponding unique ID and save the original URL and the unique ID in the firebase database. Then, the application will append the unique ID with the host website name. This would be the shortened URL generated. The application will then, display the shortened URL, along with a button for users to copy the generated shortened URL to the clipboard and lastly a QR code that stores this shortened URL (for users to scan).
4. When users key in the generated shortened URL, the application will first extract the unique ID and make a query in the database to search for the corresponding original URL. If the original URL exists, the application will redirect to the respective original URL. Else, the application redirects to the homepage.

## Node Libraries Used
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): to create routes
- [firebase](https://www.npmjs.com/package/firebase): to use firebase as backend database
- [shortid](https://www.npmjs.com/package/shortid): to create unique IDs for user specified URLs
- [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard): to copy generated URL to clipboard
- [react-qr-code](https://www.npmjs.com/package/react-qr-code): to create QR code
- [reactjs-popup](https://www.npmjs.com/package/reactjs-popup): to create popup box to display QR code
- [validator](https://www.npmjs.com/package/validator): to check whether user specified URLs are valid

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

