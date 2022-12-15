import { useState } from 'react';
import Button from '../Button/Button';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

function Formulario(props) {
  const OPTIONS = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label='Nome'
          placeholder='Digite seus Nome'
          obrigatorio={true}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label='Cargo'
          placeholder='Digite seus Cargo'
          obrigatorio={true}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label='Imagem'
          placeholder='Informe o endereço da Imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label='Time'
          lista={OPTIONS}
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Formulario;
