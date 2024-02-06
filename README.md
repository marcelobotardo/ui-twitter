# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


-------------------------------

https://youtu.be/99okStmx-7c

Masterclass React | Comece sua especialização aqui

Vite - ferramenta para construção front end.

 -- Para utilizar a ultima versão do vite
npm create vite@latest
 -- Utilizado para rodar o projeto.
npm run dev

Dicas de configuração do VS code e plugins
* Extensions
Tema - omini o rose
Fluent icons - para trocar os icones.
symbols

Para facilitar a escrita de htmls
Em configurações editar o settings.json e adicionar algumas configurações.
    "emmet.syntaxProfiles": {
        "javascript":"jsx"
    },
    "emmet.includeLanguages": {
        "javascript":"javascriptreact"
    }

 ----------------------------------------
 index.html tem a chamada de main.tsx
 que por sua vez chama o app.tsx


 ---------------------------------------
 quando for criar um componente, sempre a primeira letra deve ser caixa alta ex: "Tweet.tsx"

 Propriedade nativa do react "props.children"   

 no css:
 para deixar a fonte mais nitida no chrome


 colocar no index.html essas fontes 
 <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
 -webkit-font-smoothing: antialiased;


 css
 body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
}

rem tamanho relativo

https://www.figma.com/community/file/1202694130789327431/twitter-ui

https://phosphoricons.com
dependencia para: biblioteca de icons

npm install phosphor-react 

05/02/2024: 
https://reactrouter.com/en/main/start/tutorial
dependencias para: criação das rotas

npm install react-router-dom localforage match-sorter sort-by