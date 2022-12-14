import './ListaSuspensa.css';

function ListaSuspensa(props) {
  console.log(props);
  return (
    <div className='ListaSuspensa'>
      <label>{props.label}</label>
      <select>
        {props.lista.map((i) => (
          <option key={i}> {i} </option>
        ))}
      </select>
    </div>
  );
}

export default ListaSuspensa;
