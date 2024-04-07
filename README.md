# Introduction
This project is created as part of a technical assessment for Deloitte. It is a React web application developed to showcase Facebook login integration.

# Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js (and npm or yarn)

# Installing a Dependency
Before running the application or building it for production, you'll need to install the project dependencies. This step is essential to ensure that all required packages are downloaded and ready to use.

You can use the following command to install the project dependencies:

### `npm install`

After the installation completes, you should see a node_modules directory created in your project's root directory. This directory contains all the installed dependencies.

# Production Build
Use the following command to creates a build directory with a production build of the app:

### `npm run build`

# Deploy
After generating a production build using npm run build, you can deploy the application using following methods:

- Static Server:
  Use the following command to install serve:
  
  ### `npm install -g serve`

  After the installation if completed, use the follwing command to serve your static site on the port 3000:

  ### `serve -s build`

  The port can be adjusted using the -l or --listen flags:

   ### `serve -s build -l 4000`
  
- Automated Deployment:
  Use deployment tools like Netlify or Vercel that can automatically deploy from your Git repository (GitHub, GitLab, Bitbucket) whenever changes are pushed to the main branch.



# Demo

https://github.com/ThanapatTr/Simple-Facebook-Login/assets/116283565/ce2910b9-050c-45ef-8baa-ee24e4180745


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
