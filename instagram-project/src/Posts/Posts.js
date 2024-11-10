import Post from './Post';

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
        },
        {
            usuario: { nome: "razoesparaacreditar", imagem: "assets/razoesparaacreditar.svg" },
            conteudo: { nome: "papagaio", imagem: "assets/papagaio.png" },
            curtidas: { nome: "respondeai", imagem: "assets/filomoderna.svg", total: 52039 }
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
