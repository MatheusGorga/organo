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

      <div className='colaboradores'>
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            img={colaborador.imagem}
            cargo={colaborador.cargo}
            time={colaborador.time}
            cor={corPrimaria}
          />
        ))}
      </div>
    </section>
  );
}

export default Time;
