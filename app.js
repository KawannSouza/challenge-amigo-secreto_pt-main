//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let ultimoIndice = null;

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

function sortearAmigo() {
    let res = document.getElementById("resultado");

    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia!");
        return;
    }

    let indiceAleatorio;

    if (listaAmigos.length > 1) {
        do {
            indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        }while (indiceAleatorio === ultimoIndice);
    }else {
        indiceAleatorio = 0;
    }

    ultimoIndice = indiceAleatorio;
    res.innerHTML = `<li>${listaAmigos[indiceAleatorio]}</li>`;
}