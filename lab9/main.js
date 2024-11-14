

import {produtos} from './produtos'

document.addEventListener('DOMContentLoaded', () => { 

    // Selecionar os elementos da página
    function carregarProdutos(produtos){
        
        const produtosContainer = document.getElementById('produtos');
        const cestoContainer = document.getElementById('cesto');

        // Função para renderizar os produtos

        produtos.forEach(produto => {
            const article = document.createElement('article');
            article.innerHTML = `
            <h2>${produto.title}</h2>
            <img src = "${produto.image}" alt="${produto.title}"></img> 
            <p>Custo total: ${produto.price}</p>
            <p>${produto.description}</p>

            <button onclick="adicionarAoCesto(${produto.id})">+ Adicionar ao Cesto</button>
            `
            produtosContainer.append(article);

        });
    }
});




