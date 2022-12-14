import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto';

function App() {
  return (
    <div >
      <header >
        <Banner />
        <CampoTexto label="Nome" placeholder="Digite seus Nome" />
        <CampoTexto label="Cargo" placeholder="Digite seus Cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da Imagem" />
      </header>
    </div>
  );
}

export default App;
