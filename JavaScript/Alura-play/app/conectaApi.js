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

    const concexaoConvertida = await conexao.json();
    return concexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo
}