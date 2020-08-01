import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastraCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  // console.log('[nomeDaCategoria]', nomeDaCategoria);

  function setValue(chave, valor) { // chave: nome, descrição, etc.
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'.
    });
  }

  function handleChange(infosDoEvento) {
    // const {getAttribute, value} = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
    // console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
    // setNomeDaCategoria(infosDoEvento.target.value);
  }

  useEffect(() => {
    // console.log("Alô Brasil");
    const URL_TOP = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categorias"
      : "https://kiericoflix.herokuapp.com/categorias";

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outra categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastrar Categorias:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o formulário né?');
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastraCategoria;
