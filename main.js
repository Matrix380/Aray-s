const Jogos = [
  { nome: "Minecraft", 
    categoria: "Sandbox", 
    quantidade: 15, 
    preco: 99.90 },

  { nome: "EA Sports FC 25", 
    categoria: "Esportes", 
    quantidade: 12, 
    preco: 299.90 },

  { nome: "God of War Ragnarök", 
    categoria: "Ação e Aventura", 
    quantidade: 8, preco: 249.90 },

  { nome: "GTA V", 
    categoria: "Mundo Aberto", 
    quantidade: 20, 
    preco: 149.90 },

  { nome: "The Last of Us Part II", 
    categoria: "Ação e Aventura", 
    quantidade: 10, 
    preco: 199.90 },

  { nome: "Forza Horizon 5", 
    categoria: "Corrida", 
    quantidade: 7, 
    preco: 229.90 },

  { nome: "Mortal Kombat 1", 
    categoria: "Luta", 
    quantidade: 14, 
    preco: 179.90 },

  { nome: "Resident Evil 4", 
    categoria: "Terror", 
    quantidade: 9, 
    preco: 219.90 },

  { nome: "Super Mario Odyssey", 
    categoria: "Plataforma", 
    quantidade: 11, 
    preco: 249.90 },

  { nome: "Red Dead Redemption 2", 
    categoria: "Aventura", 
    quantidade: 6, 
    preco: 199.90 }
];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let Jogo of Jogos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${Jogo.nome}</td>
        <td>${Jogo.categoria}</td>
        <td>${Jogo.quantidade}</td>
        <td class="preco">${Jogo.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }