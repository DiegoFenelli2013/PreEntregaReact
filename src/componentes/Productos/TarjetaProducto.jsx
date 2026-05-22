import styles from "./TarjetaProducto.module.css";
import { useState } from 'react';


function TarjetaProducto({ nombre, precio, imagen }) {
    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = () => {
        setFavorito(!favorito);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className={`card ${styles.card}`}>
                <img src={imagen} className={`card-img-top ${styles.cardImg}`} alt={nombre} />

                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">${precio}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary">
                            Añadir producto
                        </button>

                        <span
                            className={styles.estrella}
                            onClick={toggleFavorito}
                        >
                            {favorito ? '⭐' : '☆'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaProducto;