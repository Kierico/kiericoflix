import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import CadastraVideo from './pages/cadastro/videos';
import CadastraCategoria from './pages/cadastro/categorias';


const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/videos" component={CadastraVideo} />
      <Route path="/cadastro/categorias" component={CadastraCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,

  document.getElementById('root')
);
