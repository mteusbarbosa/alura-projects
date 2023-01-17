const form = document.getElementById('novoItem')
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((element) => {
    criarElemento(element);
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade']

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criarElemento(itemAtual);

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = "";
    quantidade.value = "";
})

function criarElemento(item) {
    //Cria um novo elemento li
    const novoItem = document.createElement('li');
    //Adiciona a classe item nele
    novoItem.classList.add("item");

    //Cria um novo elemento strong
    const numeroItem = document.createElement('strong')
    //O elemento strong recebe a quantidade
    numeroItem.innerHTML = item.quantidade;

    //Adiciona o elemento numeroItem dentro do novoItem
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    //Adiciona o elemento novoItem dentro da lista 
    lista.appendChild(novoItem);
}

console.log(localStorage.getItem())