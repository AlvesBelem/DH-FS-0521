// Desafio: Obter a quantidade de dias e meses que temos de diferença entre as datas
// '15/05/2020' - '15/05/2021' utilizando moment e date-fns
const moment = require('moment')
const { differenceInDays } = require('date-fns')
const { differenceInMonths } = require('date-fns')


// passo 1 - criar uma variavel para a data inicial formatada com moment
let dataInicial = moment('2020-05-15')
// passo 2 - criar uma variavel para a data final formatada com moment
let dataFinal = moment('2021-05-15')

// passo 3 - criar uma variavel que irá receber a quantidade de dias
// já retornada da comparação entre as duas datas, lembre-se de usar
// o método diff do moment 
let diasDeDiferenca = dataFinal.diff(dataInicial, 'days')

// passo 3 - criar uma variavel que irá receber a quantidade de meses
// já retornada da comparação entre as duas datas, lembre-se de usar
// o método diff do moment 
let mesesDeDiferenca = dataFinal.diff(dataInicial, 'months')

// passo 4 - exibir uma mensagem com a diferença de dias
console.log('A diferença de dias entre 15/05/2020 e 15/05/2021 é ' + diasDeDiferenca)

// passo 4 - exibir uma mensagem com a diferença de meses
console.log('A diferença de meses entre 15/05/2020 e 15/05/2021 é ' + mesesDeDiferenca)

// Resolvendo o mesmo problema com o date-fns

// criar uma variavel para a data inicial formatada com date-fns
let dataInicialFNS = new Date(2020, 05, 15)

// criar uma variavel para a data inicial formatada com date-fns
let dataFinalFNS = new Date(2021, 05, 15)

// criar uma variavel que irá receber a quantidade de dias
// já retornada da comparação entre as duas datas, lembre-se de usar
// o método differenceInDays do date-fns
    let diasDeDiferencaFNS = differenceInDays(dataFinalFNS, dataInicialFNS)

// o método differenceInMonths do date-fns diferença de meses
let diasDeMesesferencaFNS = differenceInMonths(dataFinalFNS, dataInicialFNS)

// exibir uma mensagem com a diferença de dias
    console.log('A diferença de dias entre 15/05/2020 e 15/05/2021 é ' + diasDeDiferencaFNS)

// exibir uma mensagem com a diferença de meses
console.log('A diferença de meses entre 15/05/2020 e 15/05/2021 é ' + diasDeMesesferencaFNS)

