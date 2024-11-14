import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import LikesDisplay from "./LikesDisplay";

function Post({ post }) {
    const [salvo, setSalvo] = useState(false);
    const [curtido, setCurtido] = useState(false);
    const [totalCurtidas, setTotalCurtidas] = useState(post.curtidas.total);

    const toggleSalvar = () => setSalvo(!salvo);
    const toggleCurtir = () => {
        setTotalCurtidas(curtido ? totalCurtidas - 1 : totalCurtidas + 1);
        setCurtido(!curtido);
    };

    return (
        <div className="post">
           
            <PostHeader usuario={post.usuario} />
           
            <PostContent conteudo={post.conteudo} onClick={toggleCurtir} />
         
            <div className="fundo">
                <PostActions 
                    curtido={curtido} 
                    toggleCurtir={toggleCurtir} 
                    salvo={salvo} 
                    toggleSalvar={toggleSalvar} 
                />

                <LikesDisplay 
                    curtidas={post.curtidas} 
                    totalCurtidas={totalCurtidas} 
                />
            </div>
        </div>
    );
}

export default Post;
