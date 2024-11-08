import React, { useState } from "react";

export default function Posts() {
    const postsData = [
        {
            usuario: { nome: "meowed", imagem: "assets/meowed.svg" },
            conteudo: { nome: "gato-telefone", imagem: "assets/gato-telefone.svg" },
            curtidas: { nome: "respondeai", imagem: "assets/respondeai.svg", total: 101523 }
        },
        {
            usuario: { nome: "barked", imagem: "assets/barked.svg" },
            conteudo: { nome: "dog", imagem: "assets/dog.svg" },
            curtidas: { nome: "respondeai", imagem: "assets/respondeai.svg", total: 99159 }
        }
    ];

    return (
        <div className="posts">
            {postsData.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

function Post({ post }) {
    const [salvo, setSalvo] = useState(false);
    const [curtido, setCurtido] = useState(false);
    const [totalCurtidas, setTotalCurtidas] = useState(post.curtidas.total);

    const toggleSalvar = () => {
        setSalvo(!salvo);
    };

    const toggleCurtir = () => {
        if (curtido) {
            setTotalCurtidas(totalCurtidas - 1);
        } else {
            setTotalCurtidas(totalCurtidas + 1);
        }
        setCurtido(!curtido);
    };

    const curtirImagem = () => {
        if (!curtido) {
            setTotalCurtidas(totalCurtidas + 1);
            setCurtido(true);
        }
    };

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={post.usuario.imagem} alt={post.usuario.nome} />
                    {post.usuario.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" onClick={curtirImagem}>
                <img src={post.conteudo.imagem} alt={post.conteudo.nome} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon 
                            name={curtido ? "heart" : "heart-outline"} 
                            onClick={toggleCurtir} 
                            style={{ color: curtido ? "red" : "black" }}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon 
                            name={salvo ? "bookmark" : "bookmark-outline"} 
                            onClick={toggleSalvar}
                        ></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={post.curtidas.imagem} alt={post.curtidas.nome} />
                    <div className="texto">
                        Curtido por <strong>{post.curtidas.nome}</strong> e <strong>outras {totalCurtidas.toLocaleString()} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
