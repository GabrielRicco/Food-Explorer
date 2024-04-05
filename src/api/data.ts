import { ref } from "vue"

const api = [
  // Refeiçõesdei
  { title: "Pizza", 
    desc: "Teste de pizza", 
    price: 79.97, 
    ingredientes: ["tomate", "queijo", "massa"], 
    type: "refeições", 
    photo: `https://source.unsplash.com/featured/?pizza&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Sanduiche", 
    desc: "Teste de sanduiche", 
    price: 80.60, 
    ingredientes: ["hamburguer", "pão", "queijo"], 
    type: "refeições", 
    photo: `https://source.unsplash.com/featured/?sandwich&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Dogao", 
    desc: "Teste de Dogao", price: 49.65, 
    ingredientes: ["pão", "salsicha", "mostarda"], 
    type: "refeições", 
    photo: `https://source.unsplash.com/featured/?hotdog&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Pasta", 
    desc: "Teste de pasta", 
    price: 120.00, 
    ingredientes: ["macarrão", "molho de tomate", "carne moída"], 
    type: "refeições", 
    photo: `https://source.unsplash.com/featured/?pasta&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Sushi", 
    desc: "Teste de sushi", 
    price: 99.99, 
    ingredientes: ["arroz", "peixe cru", "alga"], 
    type: "refeições", 
    photo: `https://source.unsplash.com/featured/?sushi&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Salada", 
    desc: "Teste de salada", 
    price: 59.99, 
    ingredientes: ["alface", "tomate", "cenoura", "molho"], 
    type: "refeições", 
    photo: `https://source.unsplash.com/featured/?salad&random=${Math.random()}`, 
    quantity: 1 
  },

  // Sobremesas
  { title: "Torta de Limão", 
    desc: "Teste de torta de limão", 
    price: 45.75, 
    ingredientes: ["massa", "limão", "leite condensado"], 
    type: "sobremesas", 
    photo: `https://source.unsplash.com/featured/?cake&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Sorvete", 
    desc: "Teste de sorvete", 
    price: 30.00, 
    ingredientes: ["leite", "açúcar", "chocolate"], 
    type: "sobremesas", 
    photo: `https://source.unsplash.com/featured/?icecream&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Cheesecake", 
    desc: "Teste de cheesecake", 
    price: 50.00, 
    ingredientes: ["queijo", "geléia", "biscoito"], 
    type: "sobremesas", 
    photo: `https://source.unsplash.com/featured/?cheesecake&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Brownie", 
    desc: "Teste de brownie", 
    price: 25.99, 
    ingredientes: ["chocolate", "açúcar", "ovos", "farinha"], 
    type: "sobremesas", 
    photo: `https://source.unsplash.com/featured/?brownie&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Pudim", 
    desc: "Teste de pudim", 
    price: 20.00, 
    ingredientes: ["leite", "leite condensado", "ovos"], 
    type: "sobremesas", 
    photo: `https://source.unsplash.com/featured/?pudding&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Mousse de Maracujá", 
    desc: "Teste de mousse de maracujá", 
    price: 35.50, 
    ingredientes: ["maracujá", "leite condensado", "creme de leite"], 
    type: "sobremesas", 
    photo: `https://source.unsplash.com/featured/?passionfruit&random=${Math.random()}`, 
    quantity: 1 
  },

  // Bebidas
  { title: "Café Expresso", 
    desc: "Teste de café expresso", 
    price: 5.00, 
    ingredientes: ["café"], 
    type: "bebidas", 
    photo: `https://source.unsplash.com/featured/?coffee&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Suco de Laranja", 
    desc: "Teste de suco de laranja", 
    price: 8.00, 
    ingredientes: ["laranja"], 
    type: "bebidas", 
    photo: `https://source.unsplash.com/featured/?juice&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Milkshake de Chocolate", 
    desc: "Teste de milkshake de chocolate", 
    price: 20.00, 
    ingredientes: ["leite", "sorvete de chocolate", "calda de chocolate"], 
    type: "bebidas", 
    photo: `https://source.unsplash.com/featured/?milkshake&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Chá Verde", 
    desc: "Teste de chá verde", 
    price: 7.00, 
    ingredientes: ["chá verde"], 
    type: "bebidas", 
    photo: `https://source.unsplash.com/featured/?tea&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Cerveja Artesanal", 
    desc: "Teste de cerveja artesanal", 
    price: 12.00, 
    ingredientes: ["água", "malte", "lúpulo"], 
    type: "bebidas", 
    photo: `https://source.unsplash.com/featured/?beer&random=${Math.random()}`, 
    quantity: 1 
  },
  { title: "Caipirinha", 
    desc: "Teste de caipirinha", 
    price: 15.00, 
    ingredientes: ["cachaça", "limão", "açúcar"], 
    type: "bebidas", 
    photo: `https://source.unsplash.com/featured/?cocktail&random=${Math.random()}`, 
    quantity: 1 
  },
]

const isAdmin = ref(false)

const order = ref([])

export { api, isAdmin, order }