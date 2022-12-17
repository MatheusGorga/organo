import './colaborador.css';

function Colaborador(props) {
  console.log(props);
  const corFundocard = props.cor;
  return (
    <div className='card-colaborador'>
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
