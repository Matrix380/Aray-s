const Videogames = [
  {
    nome: "Super Nintendo",
    categoria: "Console Retrô",
    anoLancamento: 1990,
    quantidade: 10,
    preco: 499.90
  },

  {
    nome: "Mega Drive",
    categoria: "Console Retrô",
    anoLancamento: 1988,
    quantidade: 8,
    preco: 399.90
  },

  {
    nome: "PlayStation 1",
    categoria: "Console Clássico",
    anoLancamento: 1994,
    quantidade: 12,
    preco: 349.90
  },

  {
    nome: "Nintendo 64",
    categoria: "Console Retrô",
    anoLancamento: 1996,
    quantidade: 7,
    preco: 599.90
  },

  {
    nome: "Atari 2600",
    categoria: "Console Clássico",
    anoLancamento: 1977,
    quantidade: 5,
    preco: 699.90
  },

  {
    nome: "PlayStation 2",
    categoria: "Console Clássico",
    anoLancamento: 2000,
    quantidade: 15,
    preco: 499.90
  },

  {
    nome: "Game Boy Color",
    categoria: "Console Portátil",
    anoLancamento: 1998,
    quantidade: 9,
    preco: 299.90
  },

  {
    nome: "Nintendo GameCube",
    categoria: "Console Clássico",
    anoLancamento: 2001,
    quantidade: 6,
    preco: 649.90
  },

  {
    nome: "Xbox 360",
    categoria: "Console Clássico",
    anoLancamento: 2005,
    quantidade: 11,
    preco: 599.90
  },

  {
    nome: "Nintendo Wii",
    categoria: "Console Clássico",
    anoLancamento: 2006,
    quantidade: 13,
    preco: 399.90
  }
];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let Videogame of Videogames){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${Videogame.nome}</td>
        <td>${Videogame.categoria}</td>
        <td>${Videogame.anoLancamento}</td>
        <td>${Videogame.quantidade}</td>
        <td class="preco">${Videogame.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }