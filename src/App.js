import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div >
      <header>
        <NavBar/>
      </header>

      <main>
        <ItemListContainer greeting={"Hola soy un saludo!"}/>
      </main>
    </div>
  );
}

export default App;
