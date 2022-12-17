import Colaborador from '../colaborador/Colaborador';
import './Time.css';

function Time(props) {
  let corPrimaria = props.corPrimaria;
  let corSecundaria = props.corSecundaria;

  return (
    <section
      className='time'
      style={{
        backgroundColor: corSecundaria,
      }}
    >
      <h3
        style={{
          borderBottom: '4px solid' + corPrimaria,
        }}
      >
        {props.nome}
      </h3>

      <Colaborador
        nome={'Matheus Gorga'}
        img={'http://github.com/MatheusGorga.png'}
      />
    </section>
  );
}

export default Time;
