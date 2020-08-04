import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastraVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo);
  const { handleChange, values } = useForm({
    titulo: "Vídeo Novo",
    url: "https://www.youtube.com/watch?v=SIvxGvSCV_w",
    categoria: "Front End",
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastrar Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        //alert('Video Cadastrado com sucesso!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log("categoriaEscolhida", categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastro realizado com sucesso!');
            history.push('/');
          });

      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categorias">
        Cadastrar categorias
      </Link>
    </PageDefault>
  );
}

export default CadastraVideo;
