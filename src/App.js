import './App.css';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import Pokemons from './components/router/Pokemons';


function App() {
  return (
    <div className="App">
      <Container>
       <Header />
       <Pokemons />
      </Container>
    </div>
  );
}

export default App;
