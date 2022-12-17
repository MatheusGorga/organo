import './colaborador.css';

function Colaborador(props) {
  return (
    <div className='card-colaborador'>
      <div className='cabecalho'>
        <img src={props.img} alt={props.nome} />
      </div>
      <div className='rodape'>
        <h4>{props.nome}</h4>
        <h5>Desenvolvedor</h5>
      </div>
    </div>
  );
}

export default Colaborador;
