import React from "react";

export default function Suggestions() {
    const suggestions = [
        { nome: "bad.vibes.memes", imagem: "assets/bad.vibes.memes.svg", razao: "Segue você" },
        { nome: "chibirdart", imagem: "assets/chibirdart.svg", razao: "Segue você" },
        { nome: "razoesparaacreditar", imagem: "assets/razoesparaacreditar.svg", razao: "Novo no Instagram" },
        { nome: "adorable_animals", imagem: "assets/adorable_animals.svg", razao: "Segue você" },
        { nome: "smallcutecats", imagem: "assets/smallcutecats.svg", razao: "Segue você" }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="sugestao">
                        <div className="usuario">
                            <img src={suggestion.imagem} alt={suggestion.nome} />
                            <div className="texto">
                                <div className="nome">{suggestion.nome}</div>
                                <div className="razao">{suggestion.razao}</div>
                            </div>
                        </div>
                        <div className="seguir">Seguir</div>
                    </li>
                ))}
            </ul>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}
