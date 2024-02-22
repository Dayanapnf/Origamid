const botao = document.querySelector('button');

function somar(){
    const div = document.querySelector('div');
    const total = Number(div.innerText) + 1 ;
    if(total < 10){
        div.innerText = total;
    }else {
        console.log("NÃO É POSSÍVEL ADICIONAR MAIS")
        const p  = document.querySelector('p');
        const frase = "NÃO É POSSÍVEL ADICIONAR MAIS";
        p.innerText = frase;
    }
}


if(botao){
    botao.addEventListener('click', somar);    
}
