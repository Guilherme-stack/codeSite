import './App.css';
import Beneficios from './componentes/Beneficios';
import Header from './componentes/Header';
import Servicos from './componentes/Servicos';
import TelaInicio from './componentes/TelaInicio';
import CrescimentoVendas from './componentes/CrescimentoVendas';
import Precos from './componentes/Precos';
import Clientes from './componentes/Clientes';
import Atualizacoes from './componentes/Atualizacoes';
import Email from './componentes/Email';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TelaInicio></TelaInicio>
      <Beneficios></Beneficios>
      <Servicos></Servicos>
      <CrescimentoVendas></CrescimentoVendas>
      <Precos></Precos>
      <Clientes></Clientes>
      <Atualizacoes></Atualizacoes>
      <Email></Email>
      <Footer></Footer>
    </div>
  );
}
export default App;
