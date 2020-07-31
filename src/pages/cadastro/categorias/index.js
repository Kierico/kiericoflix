import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastraCategoria() {
  
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  //console.log('[nomeDaCategoria]', nomeDaCategoria);

  function setValue(chave, valor) { //chave: nome, descrição, etc.
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'.
    })
  }

  function handleChange(infosDoEvento) {
    //const {getAttribute, value} = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
      );
    //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
    //setNomeDaCategoria(infosDoEvento.target.value);

  }

  return (
    <PageDefault>
      <h1>Cadastrar Categorias: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o formulário né?')
        setCategorias([
         ...categorias,
         values
        ]);

        setValues(valoresIniciais)
        
      }}>
        
        <FormField 
          label= 'Nome da Categoria: '
          type="text"
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label= 'Descrição: '
          type="textarea"
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />

        {/*<div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name='descricao'
              onChange={handleChange}
            />
          </label>
        </div>*/}

        <FormField
          label='Cor'
          type="color"
          name='cor'
          value={values.cor}
          onChange={handleChange}
        />
        
        {/*<div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name='cor'
              onChange={handleChange}
            />
          </label>
        </div>*/}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastraCategoria;