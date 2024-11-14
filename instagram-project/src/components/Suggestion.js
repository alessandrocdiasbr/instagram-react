import React from "react";

export default function Suggestion({ suggestion }) {
    return (
        <li className="sugestao">
            <div className="usuario">
                <img src={suggestion.imagem} alt={suggestion.nome} />
                <div className="texto">
                    <div className="nome">{suggestion.nome}</div>
                    <div className="razao">{suggestion.razao}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </li>
    );
}
