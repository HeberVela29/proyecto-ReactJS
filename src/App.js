import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </main>
    </>
  );
}

export default App;
