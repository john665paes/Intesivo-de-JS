// const nomeProduto = "Bag Cinza HS";
// const marca = "HS";
// const preco = 60;
// const nomeArquivoImg = "1bag-bone-cinza";

// quando tenho varios valores associados a uma mesma váriaável, isso é chamado objeto. è descrito como abaixo.
const catalogo = [
    {
        id: 0,
        nome: 'Bag cinza HS',
        marca: "HS",
        preco: 70,
        nomeArquivoImg: "1bag-bone-cinza.png", 
        feminino: true,
        masculino: true,
        unisex: true,
    },
    {
        id: 1,
        nome: 'Camisa Branca Com Bag',
        marca: "HS",
        preco: 80,
        nomeArquivoImg: "2camisa-branca-com-bag.png", 
        feminino: false,
        masculino: true,
        unisex: false,
    },
    {
        id: 2,
        nome: 'Camisa Preta',
        marca: "HS",
        preco: 50,
        nomeArquivoImg: "3camisa-preta-bone-preto.png", 
        feminino: false,
        masculino: true,
        unisex: false,
    },
    {
        id: 3,
        nome: 'Camisa Cinza',
        marca: "HS",
        preco: 50,
        nomeArquivoImg: "4camisa-cinza-bone-azul.png", 
        feminino: true,
        masculino: false,
        unisex: false,
    },
    {
        id: 4,
        nome: 'Boné Cinza',
        marca: "HS",
        preco: 60,
        nomeArquivoImg: "5bone.png", 
        feminino: true,
        masculino: true,
        unisex: true,
    },
    {
        id: 5,
        nome: 'Boné Cinza',
        marca: "HS",
        preco: 60,
        nomeArquivoImg: "6bone-preto.png", 
        feminino: true,
        masculino: true,
        unisex: true,
    },
    {
        id: 6,
        nome: 'Bag Amarela',
        marca: "HS",
        preco: 50,
        nomeArquivoImg: "7-bag-amarela.png", 
        feminino: true,
        masculino: true,
        unisex: true,
    },
    {
        id: 7,
        nome: 'Bag Amarela',
        marca: "HS",
        preco: 50,
        nomeArquivoImg: "8-camisa-preta.png", 
        feminino: false,
        masculino: true,
        unisex: false,
    },
] ;

// Inseri um pedaço de HTML como texto dentro da variável
// O Java Script está montando esse HTML de forma Dinâmica
const cartaoProduto = `<div id="card-produto-1">
<img src="./assets/img/${catalogo[4].nomeArquivoImg}" alt="IMAGEM DO PRODUTO BONÉ" style="height: 300px"/>
<p>${catalogo[1].marca}</p>
<p>${catalogo[1].nome}</p>
<p>${catalogo[1].preco}</p>
<button>Adicionar</button>
</div>`;

// no meu documento, pegue pelo id dentro do conteudo HTML adicione o conteudo + o conteudo da variavel objeto JavaScript 
document.getElementById("container-produto").innerHTML += cartaoProduto