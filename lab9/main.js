document.addEventListener('DOMContentLoaded', () => { 
    carregarProdutos();
    
});


// Selecionar os elementos da página
function carregarProdutos(){
        
    const produtosContainer = document.getElementById('produtos');
    const cestoContainer = document.getElementById('cesto');


    produtos.forEach(produto => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const button = document.createElement('button')
        
        h2.textContent = `${produto.title}`;

        article.appendChild(h2);
        
        img.src = `${produto.image} `;
        img.alt = ` ${produto.title}`;
        img.height = 100;
        img.width = 100;
        article.appendChild(img);

        p1.textContent = `Custo total: ${produto.price}`;

        article.appendChild(p1)

        p2.textContent = `${produto.description}`
        p2.classList.add('box')
        article.appendChild(p2)

        button.onclick = () => {
            adicionarAoCesto(produto.id);
        };
        button.textContent = `+ Adicionar ao Cesto`

        article.appendChild(button)

        article.classList.add('box2')

        
        produtosContainer.append(article);

    });
}







