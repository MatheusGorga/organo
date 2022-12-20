import Colaborador from '../colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

function Time({ time, mudarCor, aoDeletar, colaboradores }) {
  return (
    colaboradores.length > 0 && (
      <section
        className='time'
        style={{
          backgroundImage: 'url(/assets/fundo.png)',
          backgroundColor: hexToRgba(`${time.cor}`, '0.6'),
        }}
      >
        <input
          type='color'
          value={time.cor}
          onChange={(e) => mudarCor(e.target.value, time.id)}
          className='input-color'
        />
        <h3
          style={{
            borderBottom: '4px solid' + time.cor,
          }}
        >
          {time.nome}
        </h3>

        <div className='colaboradores'>
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                nome={colaborador.nome}
                img={colaborador.imagem}
                cargo={colaborador.cargo}
                time={colaborador.time}
                cor={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
}

export default Time;
