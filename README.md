<h1 align="center">
    <img alt="React RocketShoes" src=".github/logo.png" />
    <br>
    Rocketshoes
</h1>

<h4 align="center">
  Shoes store app to practice ReactJs and Redux.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/haple/rocketshoes.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/haple/rocketshoes.svg">

  <!--FALTA COLOCAR A QUALIDADE DE CÓDIGO-->

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/haple/rocketshoes.svg">
  <a href="https://github.com/haple/rocketshoes.svg/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/haple/rocketshoes.svg">
  </a>

  <a href="https://github.com/haple/rocketshoes.svg/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/haple/rocketshoes.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/haple/rocketshoes.svg">
</p>

<p align="center">
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#running">Running</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#root-config-files">Root config files</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>

</p>

<img alt="Demo" src=".github/demo.gif" />


## Technologies

This project was developed with the following technologies:

-  [ReactJS](https://reactjs.org/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [Axios](https://github.com/axios/axios)
-  [History](https://www.npmjs.com/package/history)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [React-Toastify](https://fkhadra.github.io/react-toastify/)
-  [styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
-  [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner)
-  [json-server](https://github.com/typicode/json-server)
-  [Reactotron](https://infinite.red/reactotron)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]
---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/haple/rocketshoes
    $ cd rocketshoes
    $ yarn install


## Running
    # Run the following command to run the fake local api server:
    $ yarn api:fake
    # Open other terminal and start the application:
    $ yarn start



## Root config files

  ### .editorconfig
  Even whether your team of devs work with other code editors than not VS Code they this file preserve some code style configs.

  ### .eslintrc.js
  Used together with ESLint VS Code extension. ESLint statically analyzes your Javascript code to quickly find problems, which can be automatically fixed in most cases. Also used to force a code style in a dev team.

  ### .gitignore
  The files and folders listed in this file are ignored by git. Folders like *node_modules* and environment files are good exemple of things that should not be in version control.

  ### .prettierrc
  Used to custom the Prettier code style configs.

  ### server.json
  This file contain data used by the fake api server.

## License
This project is under the MIT license. See the [LICENSE](https://github.com/haple/rocketshoes/blob/master/LICENSE) for more information.


## Simple build for production

    $ yarn build


[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
