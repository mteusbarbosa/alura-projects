import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")
    
    //Enquanto existir um primeiro item, remove o primeiro item
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    //O método appendChilde serve para adicionar uma nova tag dentro da tag pai. A tag pai neste caso é a ul representada pela variavel lista
    busca.forEach(video => lista.appendChild(constroiCard(video.titulo, video.descricao, video.url, video.imagem)))
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))