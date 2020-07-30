import React from "react";
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastraVideo() {
    return (
      <PageDefault>
        <h1>Cadastrar Vídeos</h1>
        <Link to="/cadastro/categorias">
          Cadastrar categorias
        </Link>
      </PageDefault>
    );
  }

  export default CadastraVideo;