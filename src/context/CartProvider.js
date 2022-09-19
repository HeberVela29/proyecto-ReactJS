import { createContext, useState} from "react";


export const CartContext = createContext();

const CartProvider = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        setCart([...cart] , {item, cantidad})
    };

  return (
    <CartContext.Provider value = {{cart}}>
      {/* {children} */}
    </CartContext.Provider>
  )
}

export default CartProvider