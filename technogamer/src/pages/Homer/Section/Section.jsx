import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './Section.css'
function Section() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
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