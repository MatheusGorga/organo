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
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label='Nome' placeholder='Digite seus Nome' />
        <CampoTexto label='Cargo' placeholder='Digite seus Cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da Imagem' />
        <ListaSuspensa label='Time' lista={OPTIONS} />
        <button className='submitForm'>Criar card</button>
      </form>
    </section>
  );
}

export default Formulario;
