import './App.css';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import Pokemons from './components/router/Pokemons';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Pokemons />
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
