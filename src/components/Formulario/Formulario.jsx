import CampoTexto from '../CampoTexto/CampoTexto';
import './Formulario.css';

function Formulario() {
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label='Nome' placeholder='Digite seus Nome' />
        <CampoTexto label='Cargo' placeholder='Digite seus Cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da Imagem' />
        <button className='submitForm'>Criar card</button>
      </form>
    </section>
  );
}

export default Formulario;
