import React from 'react';
import StoryItem from './StoryItem';

function Story() {
  const stories = [
        { nome: "9gag", imagem: "assets/9gag.svg" },
        { nome: "meowed", imagem: "assets/meowed.svg" },
        { nome: "barked", imagem: "assets/barked.svg" },
        { nome: "nathanwpylestrangeplanet", imagem: "assets/nathanwpylestrangeplanet.svg" },
        { nome: "wawawicomics", imagem: "assets/wawawicomics.svg" },
        { nome: "respondeai", imagem: "assets/respondeai.svg" },
        { nome: "filomoderna", imagem: "assets/filomoderna.svg" },
        { nome: "memeriagourmet", imagem: "assets/memeriagourmet.svg" }
    ];

    return (
        <ul className="stories">
          {stories.map((story, index) => (
            <StoryItem key={index} story={story} />
          ))}
        </ul>
      );
}
    
 export default Story;