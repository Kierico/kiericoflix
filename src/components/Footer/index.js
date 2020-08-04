import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
      &copy; Orgulhosamente criado por Kiérico Souza durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>, 2020.
      </p>
    </FooterBase>
  );
}

export default Footer;
