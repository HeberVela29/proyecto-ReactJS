import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header-style">
            <h2  className="logo">
                <Link className="nav-link" to={'/'}>VyR Celulares</Link>
            </h2>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Inicio</Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/category/motorola'}>Motorola</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/category/samsung'}>Samsung</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/category/otras'}>Otras marcas</NavLink>
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar;