import './App.css';
import { TemaFornecedor } from './components/ContextoTema';
import AlteradorTema from './components/Tema';

function App() {
  return (
    <div className="App">
      <TemaFornecedor>
        <AlteradorTema />
      </TemaFornecedor>
    </div>
  );
}

export default App;
