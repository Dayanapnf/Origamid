function livro(nome,ano,autor){
    return  {
        nome: nome.toUpperCase(),
        frase: nome + ' por ' + autor,
        totalAnos:2050 - ano,
    };
}

console.log(livro('o senhor dos anéis', 1994, 'j.r.r. tolkien'));

const botao = document.querySelector(".botao");

function mostrar() {
    const texto = document.querySelector(".texto");
    texto.classList.toggle("ativar");
}


botao.addEventListener("click", mostrar);

const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
    const x = event.x ;
    const y = event.y ;
   
    circulo.style.top = y + "px";
    circulo.style.left = x + "px";
}

window.addEventListener('mousemove', seguirMouse);

