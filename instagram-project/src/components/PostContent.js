import React from "react";

function PostContent({ conteudo, onClick }) {
    return (
        <div className="conteudo" onClick={onClick}>
            <img src={conteudo.imagem} alt={conteudo.nome} />
        </div>
    );
}

export default PostContent;
