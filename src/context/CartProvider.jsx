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
        console.log('cart', [...cart, { ...item, cantidad }])
    };
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const clear = () => {
        setCart([]);
        console.log(cart);
    };

    const removeItem = (productId) => {
        let nuevoArray = [];
        cart.forEach(product => {
            if (product.id !== productId) {
                nuevoArray.push(product)
            }
        })
        setCart(nuevoArray);
        console.log(cart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};
