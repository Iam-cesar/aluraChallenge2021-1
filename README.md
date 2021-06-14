##Projeto "desafio front-end #aluradev";

# projeto online: https://alurachallenge2021.herokuapp.com/

# como rodar localmente

primeiro faça o download do projeto para ser computador,
clone ou baixe os arquivos desse repositorio do github: https://github.com/cesar-abj/aluraChallenge2021-1,

No terminal use yarn start (caso tenhao yarn instalado) ou npm start.

# modularização

├───assets<br />
│   ├───fonts<br />
│   └───img<br />
├───components<br />
│   ├───botao<br />
│   ├───botao-highlight<br />
│   ├───Img<br />
│   ├───input<br />
│   ├───logo<br />
│   ├───main<br />
│   ├───menu<br />
│   ├───menu-mobile<br />
│   ├───menu-personalizacao<br />
│   ├───menu-principal<br />
│   ├───menu-projeto<br />
│   ├───navbar<br />
│   ├───perfil<br />
│   ├───search-bar<br />
│   ├───searchbar-mobile<br />
│   ├───social-media<br />
│   ├───text-editor<br />
│   ├───textarea<br />
│   ├───title-menu<br />
│   └───usuario<br />
├───functions<br />
├───hooks<br />
└───pages<br />
    ├───editar<br />
    ├───editor<br />
    └───projetos<br />

## pages

Contem as paginas da aplicação

## functions

Contem as funçoes que foram utilizadas, cada função tem sua descrição comentado dentro de seu corpo

## hooks customizados

Contem os hooks utilizados, tambem comentado destro do seu proprio corpo

### UseLocalStorage

Usa o armazenamento local do navegador "Local Storage", recebe dois parametros;
O primeiro é o estado ou objeto a ser armazenado;
O segundo é uma função para alterar o primeiro parametro.

## components

Contem os componentes ou blocos de construção de cada parte da aplicação

### CSS e estilização

## padrao de projeto

O nome das classes foi pensado da seguinte maneira "'nome-bloco__texto' ou 'nome-bloco__paragrafo-container'",

o nome do elemento vem antes dos underlines e o nome do elemento vem depois dos underlines.

-> Esse padrão é algo parecido com o BEM.


# tecnologias

## React

Utilizei o react para treinar minhas habilidades e reforçãr os cursos que tenho feito sobre essa biblioteca.

## React-router-dom

Tinha um pouco de dificuldades em aprender o router mas depois desse projeto, minhas duvidas diminuiram e aprendi bem mais
sobre o ROUTER do que eu esperava.

## css

Sobre o css, eu tentei utilizar o maximo possivel, só utilizando o javascript quando não encontrasse de fato uma soluçao com o css.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
