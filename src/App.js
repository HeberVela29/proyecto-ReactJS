import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider} from './context/CartProvider'


function App() {

  return (
    <CartProvider value={[]}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='detalle/:id' element={<ItemDetailContainer />} />
          <Route path='category/:categoryName' element={<ItemListContainer />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> ea4156e92ee2d49115f8871333053d8403c98ea0
