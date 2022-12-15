import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div >
      <header >
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      </header>
    </div>
  );
}

export default App;
