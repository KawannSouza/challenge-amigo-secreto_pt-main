//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    let res = document.getElementById("listaAmigos");

    if (!nomeAmigo) {
        alert("O campo de nome não pode estar vazio!")
    }else {
        listaAmigos.push(nomeAmigo);

        res.innerHTML += `<li>${nomeAmigo}</li>`;
    }
}