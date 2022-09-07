import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';


function App() {
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer/> 
        <Counter stockMax='15'/>
      </main>
    </>
  );
}

export default App;
