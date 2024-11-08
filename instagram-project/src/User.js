import React, { useState } from "react";

export default function User() {
    const [nome, setNome] = useState("catanacomics");
    const [imagem, setImagem] = useState("assets/catanacomics.svg");

    const alterarNome = () => {
        const novoNome = prompt("Digite o novo nome de usuário:");
        if (novoNome) {
            setNome(novoNome);
        }
    };

    const alterarImagem = () => {
        const novaImagem = prompt("Digite o link da nova imagem de perfil:");
        if (novaImagem) {
            setImagem(novaImagem);
        }
    };

    return (
        <div className="usuario">
            <img src={imagem} alt="Imagem de perfil" onClick={alterarImagem} />
            <div className="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick={alterarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}
