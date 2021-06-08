//desafio 01 - Criar um projeto simplificado com algumas funções que o sistema de petshop também possui. ou seja, teremos que criar animais, cadastrar animais  validar os dados antes de cadastrar, vacinar animais, listar os pets, contar quantos pets estão vacinados geralmente ocorre para disparar email de campanha de vacina para os pets que anda não foram vacinados, no nosso caso , não iremos disparar email, mas, deveremos contar quantos animais temos vacinados e não vacinados, etc..
//

// passo 01: criando um array de objetos, a ideia deste array de pets será criar uma lista de pets, de modo que cada objeto ira representar um animal

let pets = [
    {
      nome: 'Yoshi',
      nomeDono: 'Victor',
      idade: 7,
      tipo: 'cachorro',
      raca: 'Akita Inu',
      peso: 40,
      genero: 'Macho',
      cor: 'ruivo',
      vacinado: true
    }, 
    {
        nome: 'Samy',
        nomeDono: 'Marcelo',
        idade: 4,
        tipo: 'Gato',
        raca: 'Siamês',
        peso: 15,
        genero: 'Femea',
        cor: 'Branco',
        vacinado: false
      }, 
      {
        nome: 'Poto',
        nomeDono: 'Lene',
        idade: 7,
        tipo: 'passaro',
        raca: 'Canário',
        peso: 2,
        genero: 'Macho',
        cor: 'Amarelo',
        vacinado: true
      }, 
    
  ]
  
//Criar uma função para listar todos so objetos dentro de um array acima

//maneira 1: resolução

const listarPets = () => {
    pets.forEach(pet => {
        console.log('Nome : ' + pet.nome)
    });
}

listarPets()

//maneira 2 : resolução

const listarPets = () => {
    for(let i = 0; i < pets.length; i++){
        console.log('Nome ' + pets[i].nome)
    }
}
listarPets()

// desafio 2: criar uma função para cadastrar pets dentro dessa nossa lista de pets contida na variavel pets esta função recebera um parametro, recomendavel que o parametro seja um objeto das mesmas propriedades do array. nome, nomeDono, tipo, raca, genero, idade, peso, cor, vacinado.

function cadastrarPet(arrayPets, objetoPets){
    return arrayPets.push(objetoPets)
}

let novoPet =   {
    nome: 'pretinha',
    nomeDono: 'Lene',
    idade: 3,
    tipo: 'gata',
    raca: 'vira-lata',
    peso: 2,
    genero: 'femea',
    cor: 'preto',
    vacinado: true
  }
  cadastrarPet(pets, novoPet)
  listarPets()

 // desafio 3 = criar função validaDados para validar se o objeto passado para a função cadastrapet, possui as propriedades nescessárias - nome, nomeDono, idade, tipo, raca, peso, genero, cor,vacinado, caso não possua deverá retornar false, caso esteja ok  retornar true. obs: utilizar operadors lógicos para solucionar este desafio.

 function validaDados(objetoPet){
     return (
         objetoPet,nome && 
         objetoPet.nomeDono &&
         objetoPet.idade &&
         objetoPet.tipo &&
         objetoPet.raca &&
         objetoPet.peso &&
         objetoPet.genero &&
         objetoPet.cor &&
         objetoPet.vacinado
         )
 }

 // aplicar uma validadação se o objeto passado com parametro possui todas as propriedaes nescessárias, se não retornar uma mensagem semelhante a abaixo: o objeto não tem todas as propiedades.

 function cadastrarPet(arrayPets, objetoPets){
    if(typeof objetoPet == "object"){
        return arrayPets.push(objetoPet)
    } else{
        console.log('insira um objeto válido')
    }
    return arrayPets.push(objetoPets)
}