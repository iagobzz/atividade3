
let novoTitulo = prompt("Digite o novo texto para o título principal:");

if (novoTitulo !== null && novoTitulo !== "") {
    let tituloPrincipal = document.getElementById("meuTitulo");

    tituloPrincipal.textContent = novoTitulo;
} else {
    alert("Nenhum texto novo foi digitado para o título. Ele permaneceu inalterado.");
}

let novoSubtitulo = prompt("Digite o novo texto para o subtítulo:");

if (novoSubtitulo !== null && novoSubtitulo !== "") {
    let subtituloElement = document.getElementById("meuSubtitulo");

    subtituloElement.textContent = novoSubtitulo;
} else {
    alert("Nenhum texto novo foi digitado para o subtítulo. Ele permaneceu inalterado.");
}