async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const concexaoConvertida = await conexao.json();
    return concexaoConvertida;
}

export const conectaApi = {
    listaVideos
}