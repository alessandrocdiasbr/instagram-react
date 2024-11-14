import React from 'react';

function StoryItem({ story }) {
  return (
    <li className="story">
      <div className="imagem">
        <img src={story.imagem} alt={story.nome} />
      </div>
      <div className="usuario">{story.nome}</div>
    </li>
  );
}

export default StoryItem;