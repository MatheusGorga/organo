import './CampoTexto.css';

const CampoTexto = (props) => {
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        type='text'
        required={props.obrigatorio}
        placeholder={props.placeholder}
        onChange={aoDigitado}
        value={props.valor}
      />
    </div>
  );
};

export default CampoTexto;
