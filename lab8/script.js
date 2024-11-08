document.querySelector('h1').addEventListener('click', function() {
    document.querySelector('h1').innerHTML = "Bem-vindo ao Mundos Perdidos!";
});
document.querySelector('button').addEventListener('dblclick', function() {
    document.querySelector('button').innerHTML 
    = "Exploração Interativa ativada!";
});

const multiplayerElement = document.querySelector('.multiplayer');
const originalText = multiplayerElement.innerHTML;


multiplayerElement.addEventListener('keydown', function() {
    multiplayerElement.innerHTML = "Até 10 Jogadores vamos derrotá-los!";
   
});
multiplayerElement.addEventListener('keyup', function() {
        multiplayerElement.innerHTML = originalText;
});

document.querySelector('#magia').addEventListener('mouseover', function() {
    document.querySelector('#magia').classList.add('shake-effect');
});

document.querySelector('#magia').addEventListener('mouseout', function() {
    document.querySelector('#magia').classList.remove('shake-effect');
});