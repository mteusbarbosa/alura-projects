const botaoIniciarCamera = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoTirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFoto = document.querySelector("[data-enviar]")

//O Async function é por que o usuário precisa aceitar o compartilhamento da camera
botaoIniciarCamera.addEventListener("click", async function () {
    //Aguarda o acesso a camera (Navigator.mediaDevices t.ly/13CQ)
    const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block"

    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function () {
    //Salva a imagem (HTMLCanvasElement.getContext() t.ly/rQ8Q)
    //CanvasRenderingContext2D.drawImage() t.ly/pAW_
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL("image/jpeg")

    //edita a propriedade CSS
    campoCamera.style.display = "none"
    mensagem.style.display = "block"

    // parar camera t.ly/VqXf
    video.srcObject.getTracks().forEach(track => track.stop())
})
//Botão quero abrir minha conta
botaoEnviarFoto.addEventListener("click", () => {
    //Busca o objeto cadastro do local storage objeto criado no script.js linha 16
    const receberDadosExistentes = localStorage.getItem("cadastro")
    //Converte os arquivos JSON em objeto javascript
    const converteRetorno = JSON.parse(receberDadosExistentes)
    //Busca o item imagem e define como a imagemURL criada na linha 26
    converteRetorno.imagem = imagemURL;

    //Devolve o objeto pro localstorage antes transformando em string
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = './abrir-conta-form-3.html'
})

