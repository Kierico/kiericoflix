import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastraCategoria() {
    return (
      <PageDefault>
        <h1>Cadastrar Categorias</h1>


        <Link to="/">
          Ir para a Home
        </Link>
      </PageDefault>
    );
  }

  export default CadastraCategoria;