import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';


function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div >
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome='Desenvolvimento' />
      <Time nome='Desenvolvimento' />
      <Time nome='Desenvolvimento' />
      <Time nome='Desenvolvimento' />
    </div>
  );
}

export default App;
