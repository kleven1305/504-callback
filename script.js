let lista = document.querySelector("ol");
let corpo = document.querySelector("body");

let raizes = [
    {nome: "Batata"},
    {nome: "Mandioca"},
    {nome: "Rabanete"}
];

let imprimirComidas = (qualquerNOmeAI) =>{
    for(let raiz of raizes){
        lista.innerHTML += `<li>${raiz.nome}</li>`
    }
    corpo.style.backgroundColor = qualquerNOmeAI;
}


let adicionarComida = (callback) =>{
    let escolheCor = prompt("Digite uma cor em ingles");
    setTimeout(() => {
        raizes.push({nome: "Gengibre"});
        callback(escolheCor);
    }, 2000);
}

adicionarComida(imprimirComidas);
