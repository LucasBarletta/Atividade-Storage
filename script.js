let caixaTxt = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let ancora = document.querySelector("a");
let titulo = document.querySelector("h3")

function pegarInfo(){
    localStorage.setItem('nome', caixaTxt.value); 
    
    if(localStorage.nome){
        caixaTxt.style.display = 'none';
        botao.style.display = 'none';
        titulo.style.display = 'none';
        texto.innerHTML = `Seja bem-vindo ${localStorage.nome}`;
        ancora.innerHTML = `Não é você ${localStorage.nome}?`;
    }
    
}

if(localStorage.nome){
    caixaTxt.style.display = 'none';
    botao.style.display = 'none';
    titulo.style.display = 'none';
    texto.innerHTML = `Seja bem-vindo ${localStorage.nome}`;
    ancora.innerHTML = `Não é você ${localStorage.nome}?`;
}


botao.onclick = pegarInfo;

function limparStorage(){
    localStorage.clear();
}


ancora.onclick = limparStorage;