import './Input.css';

const Input = ({
  type = 'text',
  label,
  obrigatorio = false,
  placeholder,
  aoAlterado,
  valor,
}) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        required={obrigatorio}
        placeholder={placeholder}
        onChange={(e) => aoAlterado(e.target.value)}
        value={valor}
      />
    </div>
  );
};

export default Input;
