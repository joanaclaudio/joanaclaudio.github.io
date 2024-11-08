

function mudarTexto (){
    const frase  = document.querySelector('p');
    frase.innerHTML = '1. Obrigado por passares!';
}
function reporTexto(){
    const frase  = document.querySelector('p');
    frase.innerHTML = '1. Passa por aqui!';
}
document.querySelectorAll('button').forEach((button) => {
    // code here
    button.addEventListener('click', () => {
        const texto = document.querySelector('#texto');
        texto.style.color = button.dataset.color;
    });
});

const cores = [`#add8e6`, `#ffcccb`, `#fffacd`, `#d3d3d3`];
let indiceCor = 0;
function mudarFundoCaixa(){
    
    const input = document.querySelector('#inputTexto'); // Seleciona o elemento pelo ID
    input.style.backgroundColor = cores[indiceCor]; // Muda a cor de fundo
    indiceCor = (indiceCor + 1) % cores.length;
}
document.querySelector('#inputTexto').addEventListener('input', mudarFundoCaixa);

document.querySelector('select').onchange = function() {
    document.querySelector('body').style.backgroundColor = this.value;
}



let counter = localStorage.getItem('click') || 0;
const heading = document.querySelector('.number');
heading.textContent = counter;

        
function contagem() {
    counter++;
    heading.textContent = counter;
    localStorage.setItem('click', counter);
}

document.querySelector('form').onsubmit = (e) => {
    // do not reload the page
    e.preventDefault()
    var nome = document.getElementById('txt').value.trim();  // .trim() para evitar espaços extras
    var idade = document.getElementById('inputNumber').value.trim(); // .trim() para evitar espaços extras
    if (nome === "" || idade === "") {
        document.getElementById('mensagem').innerHTML = "Por favor, preencha todos os campos.";
        
    }

    if(nome.toLowerCase().endsWith('a')){
        document.getElementById('mensagem').innerHTML = `Olá, a ${nome} tem ${idade} anos.`;
    } else {
        document.getElementById('mensagem').innerHTML = `Olá, o ${nome} tem ${idade} anos.`;
    }
    
};


document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o contador
    let counterAuto = 0;

    // Seleciona o elemento para exibir o contador
    const heading = document.querySelector('#counterAuto');

    // Atualiza o contador na página
    heading.textContent = counterAuto;

    // Função que faz o contador incrementar automaticamente
    function contagemAuto() {
        counterAuto++; // Incrementa o contador
        heading.textContent = counterAuto; // Atualiza o valor no HTML
    }

    // Inicia a contagem automática
    setInterval(contagemAuto, 1000); // Incrementa a cada 1 segundo
});












