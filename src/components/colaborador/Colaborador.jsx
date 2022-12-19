import './colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai';

function Colaborador(props) {
  const corFundocard = props.cor;
  return (
    <div className='card-colaborador'>
      <AiFillCloseCircle
        size={24}
        className='deletar'
        onClick={props.aoDeletar}
      />

      <div
        className='cabecalho'
        style={{
          backgroundColor: corFundocard,
        }}
      >
        <img src={props.img} alt={props.nome} />
      </div>
      <div className='colaborador-rodape'>
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
}

export default Colaborador;
