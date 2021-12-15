[![Netlify Status](https://api.netlify.com/api/v1/badges/c299f784-8732-4d72-a662-43e2ec9ba227/deploy-status)](https://app.netlify.com/sites/app-market/deploys)

# Getting Started with Products App

Product Listing App using with React & Redux.

## Available Scripts

In the project directory, you can run:

### `yarn start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console

## Links
Products App Backend : [API (JSON Server)](https://products-app-market.herokuapp.com/)<br>
Products App Frontend :  [Netlify App](https://products-app-market.herokuapp.com/)

## Folder Structure

I used the following folder structure:

```
products-app/
  README.md               ---> Documentation is here 
  node_modules/           ---> Dependencies 
  package.json 
  .prettirerc             ---> I used prettier for code standardization.
  public/
    index.html
    favicon.ico
    manifest.json
    robots.txt
    android-icon.png
    android-icon-36x36.png
    ....
  server/                 ---> JSON server is here
    server.js             ---> JSON server file
    db.json               ---> data for JSON server
    package.json
  src/
    assets/               ---> I keep files such as icons, images, etc. of the project here 
      icons/
    components/           ---> I keep the components in the project here. (like Button, Checkbox, etc.) 
    layouts/              ---> I keep the layouts of the project here (like Header, Footer, Sidebar)
    hooks/                ---> I keep the custom hooks I created here 
    lib/                  ---> I keep global styles, helpers, and media queries here
    store/                ---> I keep the redux components I use for state management here
      actions/            ---> Actions is here
      reducers/           ---> Reducers is here
      index.js            ---> Persistor and Store is here
      types.js            ---> I'm pulling action types from here 
    App.js                ---> This is main app part
    index.js
    
```

## Tech Stack
I used these technologies in the project:

- [React](https://tr.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://styled-components.com/)
- [React Paginate](https://www.npmjs.com/package/react-paginate)
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://github.com/axios/axios)
