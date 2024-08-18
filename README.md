This Project is a part of Assignmnet given to Accuknox.
Here are steps to manually run the project.
<h1> Make sure you have NPM Installed</h1>
1) The framework we use here is Vite+React
2) create a folder in your desktop and open it in VScode.

<h1>Creating the Project</h1>
1) open a new terminal and run the following commands
2) npm create vite@latest
3) then give the Project name and select React and Javascript
4) Go the Poroject directory by cd #project_name
5) install the node modules
6) run the command : npm run dev


<h1>Installing the dependencies</h1>
1) you can install by : npm i @reduxjs/toolkit chart.js react-chartjs-2 react-icons react-redux react-router-dom uuid


<h1>Configuring Tailwind and daisy ui </h1>
1) run command : npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p

2) Add the paths to all of your template files in your tailwind.config.js file.
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


3)Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

4) Installing Daisy Ui
5) npm i -D daisyui@latest
6) In the tailwind.config.js file overwrite :
    plugins: [
    require('daisyui'),
  ],

7) Clear the index.css and App.css files
8) lastly run command: npm run dev
