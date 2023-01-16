const form = document.getElementById('novoItem')
const lista = document.getElementById("lista")

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    adicionarObjeto(event.target.elements['nome'].value, event.target.elements['quantidade'].value);
})

function adicionarObjeto(nome, quantidade){
    /* console.log(nome);
    console.log(quantidade); */

    //Cria um novo elemento li
    const novoItem = document.createElement('li');
    //Adiciona a classe item nele
    novoItem.classList.add("item");

    //Cria um novo elemento strong
    const numeroItem = document.createElement('strong')
    //O elemento strong recebe a quantidade
    numeroItem.innerHTML = quantidade;

    //Adiciona o elemento numeroItem dentro do novoItem
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    //Adiciona o elemento novoItem dentro da lista 
    lista.appendChild(novoItem);
    
}