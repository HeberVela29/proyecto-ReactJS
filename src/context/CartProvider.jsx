import { useState } from "react";
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const MySwal = withReactContent(Swal)

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            MySwal.fire({
                title: 'Este producto ya está en el carrito 😐',
                confirmButtonText: 'Cerrar'
                })
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

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const totalItems = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
    };

    const totalPrecioCart = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.precio * cartItem.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clear, removeItem, totalItems, totalPrecioCart }}>
            {children}
        </CartContext.Provider>
    );
};
