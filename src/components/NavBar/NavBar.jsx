import './style.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="header-style">
            <h2 className="logo">VyR Tecnología</h2>
            <ul className="nav-list">
                <a href="/" target="_blank" className="nav-item">Inicio</a>
                <a href="/" target="_blank" className="nav-item">Productos</a>
                <a href="/" target="_blank" className="nav-item">Contacto</a>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar