import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Productos from "./Productos/Productos.jsx"
import './Section.css'
function Section() {
    const [key, setKey] = useState('Categorías de productos');
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="columnas"
        >
            <Tab eventKey="Categorías de productos" title="Categorías de productos">
                <Productos />
            </Tab>
            <Tab eventKey="Productos destacados" title="Productos destacados">
                Productos destacados
            </Tab>
        </Tabs>
    );
}
export default Section;