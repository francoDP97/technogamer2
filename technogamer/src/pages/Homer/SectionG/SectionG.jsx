import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './SectionG.css';
function SectionG() {
    const [key, setKey] = useState('Categorías de productos');
    return (
        <>
            <h2>GUÍAS, CONSEJOS Y TRUCOS</h2>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className=" columnas articulos"
            >
                <Tab eventKey="Categorías de productos" title="ARTICULO DESTACADOS">
                    asda
                </Tab>
                <Tab eventKey="Productos destacados" title="ARTICULO MÁS RECIENTES">
                    Productos destacados
                </Tab>
            </Tabs>
        </>
    );
}
export default SectionG;