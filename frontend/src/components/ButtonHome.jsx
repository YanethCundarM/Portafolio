import React from "react";
import "../style/ButtonHome.css";
import { HiOutlineChevronRight } from "react-icons/hi";

const ButtonHome = () => {
    return (
        <div className="cardButtonEnHome">
            <button className="buttonHome">
                COMPRAR AHORA 
                <HiOutlineChevronRight className="iconFlecha" />
            </button>
        </div>
    );
};

export default ButtonHome;
