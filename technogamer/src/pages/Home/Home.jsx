import React from "react";
import Section from "./Section/Section";
import SectionG from "./SectionG/SectionG";
import Article from "./Article/Article";
import './Home.css';
function Homer() {
    return (
        <>
            <div className="main">
                <div className="direccion">
                    <h1>Al maximo con el Gamer</h1>
                    <div className="triangulo"></div>
                </div>
            </div>
            <Section />
            <SectionG />
            <Article />
        </>
    );
}
export default Homer;