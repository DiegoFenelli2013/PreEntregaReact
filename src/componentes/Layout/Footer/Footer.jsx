import styles from './Footer.module.css'
import Directorio from '../../Equipo/Directorio';

function Footer() {
    return (
        <footer className={styles.footer}>
            <h2>Nuestro Equipo</h2>
            <Directorio />

            <p>&copy; 2025 - Mi Aplicación React</p>
        </footer >
    );
}
export default Footer;