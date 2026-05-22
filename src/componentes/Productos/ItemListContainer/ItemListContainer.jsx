import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from 'react';

function ItemListContainer({ Mensaje }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const productosJson = [
        { id: '1234', nombre: 'Notebook Pro', precio: 12000, stock: 15 },
        { id: '2344', nombre: 'Monitor Curvo', precio: 450000, stock: 25 },
        { id: '2545', nombre: 'Teclado Mecánico', precio: 15000, stock: 50 },];

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar');
                return res.json();
            })
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                setError(err.message);
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando Productos...</p>;

    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            <h2>{Mensaje}</h2>
            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}

export default ItemListContainer;