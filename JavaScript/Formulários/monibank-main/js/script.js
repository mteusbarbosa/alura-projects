import ehUmCPF from "./valida-CPF.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]")
const formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
     }

     //Cria o objeto json cadastro
     localStorage.setItem("cadastro", JSON.stringify(listaRespostas))

     window.location.href = './abrir-conta-form-2.html'
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))
    //campo.validity -> Analisa todos os possíveis erros e retorna true pra erro e false caso não tenha erro. Esse código abaixo vai fazer a leitura do campo e previnir o comportamento padrão para caso ele retorne invalid. O comportamento padrão é o popup do HTML que diz que está faltando um dado no campo ou que o dado é inválido
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

//Objeto de objetos com as mensagens de erro
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = ""
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) { ehUmCPF(campo) }
    if (campo.name == "aniversario" && campo.value != "") { ehMaiorDeIdade(campo) }
    //console.log(campo.validity);

    //Para cada erro, se houver um erro, imprime a mensagem do erro dentro do campo correto
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro]
            console.log(mensagem)
        }
    })

    //Seleciona o span. O parent Node volta para o <li> e o querySelector busca o span
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
    const validadorDeInput = campo.checkValidity();

    //Se o campo não estiver válido, imprime a mensagem de erro, se não imprime nada
    !validadorDeInput ? mensagemErro.textContent = mensagem : mensagemErro.textContent = "";
}