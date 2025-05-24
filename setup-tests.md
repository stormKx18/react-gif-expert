1.- instalaciones (npm):


`npm install jest babel-jest @babel/preset-env @babel/preset-react @babel/core --save-dev`

`npm install @testing-library/react @types/jest jest-environment-jsdom --save-dev`

`npm install whatwg-fetch --save-dev`

`npm i --save-dev @types/whatwg-fetch`


2.- Crear la configuración de babel babel.config.cjs
~~~
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true }}],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
~~~

3.- Crear archivo jest.config.cjs
~~~
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};
~~~

4.- Crear archivo jest.setup.js 
~~~
module.exports = require("whatwg-fetch");
~~~

5.- Actualizar los scripts del package.json
~~~
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "jest --watchAll"
  }
~~~

6.- Modificar archivo esline.config.js (Agregar a export default)
~~~
      env: {
        jest: true, // Add this line to enable Jest environment
      },
~~~

7.- Crear folder tests al mismo nivel que src y llamar a los archivos fileName.test.jsx

8.- Run tests
`npm run test`