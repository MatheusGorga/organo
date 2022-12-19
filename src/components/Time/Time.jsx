import Colaborador from '../colaborador/Colaborador';
import './Time.css';

function Time(props) {
  let corPrimaria = props.corPrimaria;
  let corSecundaria = props.corSecundaria;

  return (
    props.colaboradores.length > 0 && (
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
          {props.colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                nome={colaborador.nome}
                img={colaborador.imagem}
                cargo={colaborador.cargo}
                time={colaborador.time}
                cor={corPrimaria}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
}

export default Time;
