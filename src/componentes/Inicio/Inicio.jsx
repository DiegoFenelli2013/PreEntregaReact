import styles from './Inicio.module.css';
function Inicio() {
    return (
        <>
            <h2>Promo del Mes</h2>
            <img src='/images/promo.jpg'
                alt='promo' className={styles.imagenPromo} />
        </>
    );
}
export default Inicio;