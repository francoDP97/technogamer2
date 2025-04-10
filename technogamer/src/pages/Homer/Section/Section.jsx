import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './Section.css'
function Section() {
    const [key, setKey] = useState('Categorías de productos');
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="productos"
        >
            <Tab eventKey="Categorías de productos" title="Categorías de productos">
                Categorías de productos
            </Tab>
            <Tab eventKey="Productos descados" title="Productos descados">
                Productos descados
            </Tab>
        </Tabs>
    );
}
export default Section;