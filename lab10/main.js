document.addEventListener('DOMContentLoaded', () => { 
    carregarDados(); // Chamada principal para carregar tudo
});

// Função principal para carregar produtos e categorias
function carregarDados() {
    let produtos = [];
    let categorias = [];

    // Carregar produtos
    fetch('https://deisishop.pythonanywhere.com/products')
        .then(response => response.json())
        .then(data => {
            produtos = data; // Armazena os produtos
            carregarProdutos(produtos); // Exibe todos os produtos inicialmente
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
        });

    // Carregar categorias
    fetch('https://deisishop.pythonanywhere.com/categories')
        .then(response => response.json())
        .then(data => {
            categorias = data; // Armazena as categorias
            carregarCategorias(categorias, produtos); // Carrega o select de categorias
        })
        .catch(error => {
            console.error('Erro ao carregar as categorias:', error);
        });
}


const cestoContainer = document.getElementById('cesto');
const produtosContainer = document.getElementById('produtos');
let listaCesto = JSON.parse(localStorage.getItem('lista')) || [];
let count = 0;
const custoTotalContainer = document.getElementById('custo-total');
let listaProdutos = JSON.parse(localStorage.getItem('lista')) || [];
function atualizarCustoTotal() {
    const existente = document.getElementById('custo-total');
    if (existente) {
        existente.remove();
    }

    // Cria um novo elemento ou atualiza o texto
    const custoTotalContainer = document.createElement('p');
    custoTotalContainer.id = 'custo-total';
    custoTotalContainer.textContent = `Custo Total: ${count.toFixed(2)}€`;

    // Adiciona o elemento ao final do cestoContainer
    cestoContainer.appendChild(custoTotalContainer);
}

// Selecionar os elementos da página
function carregarProdutos(produtos){
    
    

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
        article.appendChild(quebraLinha)
       
        button.textContent = `+ Adicionar ao Cesto`;
        
        article.appendChild(button);
        button.onclick = () => {
            listaCesto.push(article);

            // Atualizando o localStorage
            localStorage.setItem('lista', JSON.stringify(listaCesto))
           adicionarAoCesto(produto);

        };
        

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


function adicionarAoCesto(produto){

    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const button = document.createElement('button')
    const quebraLinha = document.createElement('br')
    
    const idUnico = `item-${produto.id}`;
    article.id = idUnico;

    h2.textContent = `${produto.title}`;

    article.appendChild(h2);
    
    img.src = `${produto.image} `;
    img.alt = ` ${produto.title}`;
    img.height = 100;
    img.width = 100;
    article.appendChild(img);

    p1.textContent = `Custo total: ${produto.price} €`;
    count += parseFloat(produto.price);
    atualizarCustoTotal();
    
    article.appendChild(p1)
    article.appendChild
   
    


   
    button.textContent = `- Remover do Cesto`;
    button.onclick = () => {
       removerDoCesto(produto, idUnico);
       count -= parseFloat(produto.price);
        atualizarCustoTotal(); 
    };
    article.appendChild(button);
    
    article.classList.add('article2');

    h2.classList.add('titulo');

    img.classList.add('img2');

    p1.classList.add('p1');
    p2.classList.add('p2');

    button.classList.add('button')

    cestoContainer.append(article);
    cestoContainer.classList.add('produtosOrganizados')
    atualizarCustoTotal();

}


function removerDoCesto(produto, idUnico) {
    // Remover da listaCesto
    const index = listaCesto.findIndex(item => item.title === produto.title);
    if (index !== -1) {
        listaCesto.splice(index, 1);
        // Atualiza o localStorage
        localStorage.setItem('lista', JSON.stringify(listaCesto));
    }

    // Remover do DOM
    const itemARemover = document.getElementById(idUnico);
    if (itemARemover) {
        itemARemover.remove();
        
    } else {
        console.error('Elemento não encontrado no DOM:', idUnico);
    }
    atualizarCustoTotal();

}

const categoriasContainer = document.getElementById('categoria');
function carregarCategorias(categorias, produtos){
        const option1 = document.createElement('option');
        option1.textContent = 'Todas as categorias';

        categoriasContainer.appendChild(option1)
        categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.textContent = categoria;
        categoriasContainer.appendChild(option);

        
    });
    categoriasContainer.addEventListener('change', () => {
        const categoriaSelecionada = categoriasContainer.value;  

           
            produtosContainer.innerHTML = '';
        if (categoriaSelecionada === 'Todas as categorias') {
            carregarProdutos(produtos);  
        } else {
            
            const produtosFiltrados = produtos.filter(produto => produto.category === categoriaSelecionada);
            carregarProdutos(produtosFiltrados);  
        }
    })

}











