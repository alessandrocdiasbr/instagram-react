import React from "react";

function SuggestionUser({ imagem, nome }) {
    return (
        <div className="usuario">
            <img src={imagem} alt={nome} />
            <div className="texto">
                <div className="nome">{nome}</div>
            </div>
        </div>
    );
}

export default SuggestionUser;
