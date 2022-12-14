import './CampoTexto.css';

const CampoTexto = (props) => {
  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input type='text' placeholder={`Digite seu nome ${props.label}`} />
    </div>
  );
};

export default CampoTexto;
