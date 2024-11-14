import React from "react";
import SuggestionsList from "./SuggestionsList";

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

            <SuggestionsList suggestions={suggestions} />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}
