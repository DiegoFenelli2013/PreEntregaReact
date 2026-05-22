import styles from './Header.module.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>SHOP SPORTS</h1>

      <nav>
        <ul>
          <li><Link className={styles.botonenlace} to="/">Inicio</Link></li>
          <li><Link className={styles.botonenlace} to="/productos">Productos</Link></li>
          <li><Link className={styles.botonenlace} to="/nuevo-producto">Nuevo Producto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;