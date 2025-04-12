import React from "react";
import Hardware from "../../../assets/img/iconos/hardware.svg"
import Chat from "../../../assets/img/iconos/chat.svg"
import Garantia from "../../../assets/img/iconos/garantia.svg"
import Camion from "../../../assets/img/iconos/camion.svg"
import './Article.css'

function Article() {
    const beneficios = [
        {
            nombre: "hardware",
            icono: Hardware,
            texto: "PRODUCTOS Y SETS EXCLUSIVOS"

        },
        {
            nombre: "evios",
            icono: Camion,
            texto: "SE ENVÍA GRATIS EL SIGUIENTE DÍA HÁBIL*"


        },
        {
            nombre: "chat",
            icono: Chat,
            texto: "CHAT EN VIVO CON ESPECIALISTAS EN PRODUCTOS "


        },
        {
            nombre: "garantia",
            icono: Garantia,
            texto: "60 DÍAS DE DEVOLUCIONES SIN RIESGO "


        }


    ]
    return (
        <>
            <article className="beneficios">
                <h3>¿POR QUÉ COMPRAR DIRECTAMENTE A TECHNOGAMER ?</h3>
                <div className="nuetros_bene">
                    {beneficios.map((beneficio, index) => (
                        <div key={index} className="beneficio">
                            <div className="img_ben">
                                <img src={beneficio.icono} alt={beneficio.nombre} />
                            </div>
                            <p>
                                {beneficio.texto}
                            </p>
                        </div>
                    ))}
                </div>

            </article>
        </>
    );
}
export default Article;