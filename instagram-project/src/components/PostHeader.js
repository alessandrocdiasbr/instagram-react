import React from "react";

function PostHeader({ usuario }) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={usuario.imagem} alt={usuario.nome} />
                {usuario.nome}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

export default PostHeader;
