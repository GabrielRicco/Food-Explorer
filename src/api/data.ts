const api = [
  // Refeições
  { title: "Pizza", desc: "Teste de pizza", price: 79.97, ingredientes: ["tomate", "queijo", "massa"], type: "refeições", photo: "https://source.unsplash.com/random" },
  { title: "Sanduiche", desc: "Teste de sanduiche", price: 80.60, ingredientes: ["hamburguer", "pão", "queijo"], type: "refeições", photo: "https://source.unsplash.com/random" },
  { title: "Dogao", desc: "Teste de Dogao", price: 49.65, ingredientes: ["pão", "salsicha", "mostarda"], type: "refeições", photo: "https://source.unsplash.com/random" },
  { title: "Pasta", desc: "Teste de pasta", price: 120.00, ingredientes: ["macarrão", "molho de tomate", "carne moída"], type: "refeições", photo: "https://source.unsplash.com/random" },
  { title: "Sushi", desc: "Teste de sushi", price: 99.99, ingredientes: ["arroz", "peixe cru", "alga"], type: "refeições", photo: "https://source.unsplash.com/random" },
  { title: "Salada", desc: "Teste de salada", price: 59.99, ingredientes: ["alface", "tomate", "cenoura", "molho"], type: "refeições", photo: "https://source.unsplash.com/random" },

  // Sobremesas
  { title: "Torta de Limão", desc: "Teste de torta de limão", price: 45.75, ingredientes: ["massa", "limão", "leite condensado"], type: "sobremesas", photo: "https://source.unsplash.com/random" },
  { title: "Sorvete", desc: "Teste de sorvete", price: 30.00, ingredientes: ["leite", "açúcar", "chocolate"], type: "sobremesas", photo: "https://source.unsplash.com/random" },
  { title: "Cheesecake", desc: "Teste de cheesecake", price: 50.00, ingredientes: ["queijo", "geléia", "biscoito"], type: "sobremesas", photo: "https://source.unsplash.com/random" },
  { title: "Brownie", desc: "Teste de brownie", price: 25.99, ingredientes: ["chocolate", "açúcar", "ovos", "farinha"], type: "sobremesas", photo: "https://source.unsplash.com/random" },
  { title: "Pudim", desc: "Teste de pudim", price: 20.00, ingredientes: ["leite", "leite condensado", "ovos"], type: "sobremesas", photo: "https://source.unsplash.com/random" },
  { title: "Mousse de Maracujá", desc: "Teste de mousse de maracujá", price: 35.50, ingredientes: ["maracujá", "leite condensado", "creme de leite"], type: "sobremesas", photo: "https://source.unsplash.com/random" },

  // Bebidas
  { title: "Café Expresso", desc: "Teste de café expresso", price: 5.00, ingredientes: ["café"], type: "bebidas", photo: "https://source.unsplash.com/random" },
  { title: "Suco de Laranja", desc: "Teste de suco de laranja", price: 8.00, ingredientes: ["laranja"], type: "bebidas", photo: "https://source.unsplash.com/random" },
  { title: "Milkshake de Chocolate", desc: "Teste de milkshake de chocolate", price: 20.00, ingredientes: ["leite", "sorvete de chocolate", "calda de chocolate"], type: "bebidas", photo: "https://source.unsplash.com/random" },
  { title: "Chá Verde", desc: "Teste de chá verde", price: 7.00, ingredientes: ["chá verde"], type: "bebidas", photo: "https://source.unsplash.com/random" },
  { title: "Cerveja Artesanal", desc: "Teste de cerveja artesanal", price: 12.00, ingredientes: ["água", "malte", "lúpulo"], type: "bebidas", photo: "https://source.unsplash.com/random" },
  { title: "Caipirinha", desc: "Teste de caipirinha", price: 15.00, ingredientes: ["cachaça", "limão", "açúcar"], type: "bebidas", photo: "https://source.unsplash.com/random" },
]

const isAdmin = true

export { api, isAdmin }