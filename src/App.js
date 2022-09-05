import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';


function App() {
  return (
    <div >
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting={"Hola soy un saludo!"}/>
        <Counter stockMax='15'/>
      </main>
    </div>
  );
}

export default App;
