import React from "react";

function LikesDisplay({ curtidas, totalCurtidas }) {
    return (
        <div className="curtidas">
            <img src={curtidas.imagem} alt={curtidas.nome} />
            <div className="texto">
                Curtido por <strong>{curtidas.nome}</strong> e <strong>outras {totalCurtidas.toLocaleString()} pessoas</strong>
            </div>
        </div>
    );
}

export default LikesDisplay;
