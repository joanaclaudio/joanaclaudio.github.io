document.addEventListener('DOMContentLoaded', () => { 
    carregarProdutos();
    atualizaCesto();
    
});


// Selecionar os elementos da página
function carregarProdutos(){
        
    const produtosContainer = document.getElementById('produtos');
    const cestoContainer = document.getElementById('cesto');
    let listaCesto = JSON.parse(localStorage.getItem('lista'));

    produtos.forEach(produto => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const button = document.createElement('button')
        const quebraLinha = document.createElement('br')
        h2.textContent = `${produto.title}`;

        article.appendChild(h2);
        
        img.src = `${produto.image} `;
        img.alt = ` ${produto.title}`;
        img.height = 100;
        img.width = 100;
        article.appendChild(img);

        p1.textContent = `Custo total: ${produto.price} €`;

        article.appendChild(p1)
        p2.textContent = `${produto.description}`
        
        p2.classList.add('box')
            
        article.appendChild(p2)

       
        button.textContent = `+ Adicionar ao Cesto`;
        button.onclick = () => {
           listaCesto.push(article);
           localStorage.setItem('lista', JSON.stringify(listaCesto));
           listaCesto = JSON.parse(localStorage.getItem('lista'));
        };
        article.appendChild(button);
        

        article.classList.add('article');

        h2.classList.add('titulo');

        img.classList.add('img');

        p1.classList.add('p1');
        p2.classList.add('p2');

        button.classList.add('button')


        
        produtosContainer.append(article);
        
        produtosContainer.classList.add('produtosOrganizados')

    });
}

function atualizaCesto(){
    listaCesto.forEach(produto => {adicionarAoCesto(produto)})
}
function adicionarAoCesto(produto){
    produto.button.textContent =  `- Remove do Cesto`;
    button.onclick = () => {
        const index = listaCesto.indexOf(produto);

        listaCesto.splice(index, 1);
        localStorage.setItem('lista', JSON.stringify(listaCesto));
    
    }
    cestoContainer.append(produto);
}







