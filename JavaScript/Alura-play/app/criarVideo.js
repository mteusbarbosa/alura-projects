import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    //Protege a página de ser recarregada ao clicar no botão de submit
    evento.preventDefault();

    //Faz o recebimento de todos os dados preenchidos no formulário
    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() * 10).toString()

    try{
    //Como o cria Video é uma promise, precisa declarar  a funcão como assíncrona e definir o await
    await conectaApi.criaVideo(titulo, descricao, url, imagem)

    //Quando der certo enviar para a página
    window.location.href = "../pages/envio-concluido.html"
    } catch(e){
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento))