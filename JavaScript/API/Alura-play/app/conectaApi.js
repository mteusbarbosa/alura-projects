async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const concexaoConvertida = await conexao.json();
    return concexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers:{
            //Define o tipo do arquivo como json
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    //Caso a conexão não dê certo ative o erro
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }
    const concexaoConvertida = await conexao.json();
    return concexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}