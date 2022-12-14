import Button from '../Button/Button';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

function Formulario() {
  const OPTIONS = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log('Form foi salvo');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label='Nome'
          placeholder='Digite seus Nome'
          obrigatorio={true}
        />
        <CampoTexto
          label='Cargo'
          placeholder='Digite seus Cargo'
          obrigatorio={true}
        />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da Imagem' />
        <ListaSuspensa label='Time' lista={OPTIONS} obrigatorio={true} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Formulario;
