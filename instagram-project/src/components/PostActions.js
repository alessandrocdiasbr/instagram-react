import React from "react";

function PostActions({ curtido, toggleCurtir, salvo, toggleSalvar }) {
    return (
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
    );
}

export default PostActions;
