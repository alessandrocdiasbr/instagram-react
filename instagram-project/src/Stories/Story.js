import React from "react";

export default function Story({ story }) {
    return (
        <li className="story">
            <div className="imagem">
                <img src={story.imagem} alt={story.nome} />
            </div>
            <div className="usuario">{story.nome}</div>
        </li>
    );
}
