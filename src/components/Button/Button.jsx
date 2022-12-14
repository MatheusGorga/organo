import './Button.css';

function Button(props) {
  return <button className='submitForm'>{props.children}</button>;
}

export default Button;
