import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='detalle/:id' element={<ItemDetailContainer/>}/>
        <Route path='category/:categoryName' element={<ItemListContainer/>} />  
        <Route path='category/:categoryName' element={<ItemListContainer/>} />
        <Route path='category/:categoryName' element={<ItemListContainer/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
