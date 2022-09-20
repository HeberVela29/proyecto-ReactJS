import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ese producto ya está en el carrito');
        } else {
            setCart([...cart, { ...item, cantidad }])
        }
        console.log('cart', [...cart, { ...item, cantidad }] )
    };
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };
    // const clear = () => {
    //     setCart([]);
    // }
    // const removeItem = () => {

    // }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
