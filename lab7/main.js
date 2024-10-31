

function mudarTexto (){
    const frase  = document.querySelector('p');
    frase.innerHTML = '1. Obrigado por passares!';
}
function reporTexto(){
    const frase  = document.querySelector('p');
    frase.innerHTML = '1. Passa por aqui!';
}

function mudarCor(cor){

    const texto = document.querySelector('#texto');
    texto.style.color = cor;
    
}
const cores = [`#add8e6`, `#ffcccb`, `#fffacd`, `#d3d3d3`];
let indiceCor = 0;
function mudarFundoCaixa(){
    
    const input = document.querySelector('#inputTexto'); // Seleciona o elemento pelo ID
    input.style.backgroundColor = cores[indiceCor]; // Muda a cor de fundo
    indiceCor = (indiceCor + 1) % cores.length;
}
document.querySelector('#inputTexto').addEventListener('input', mudarFundoCaixa);

function mudarCorFundoPagina(){
    const cor = document.querySelector('#textoCor').value;
    document.body.style.backgroundColor = cor; 
}
