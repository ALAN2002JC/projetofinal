let continuar = true
let abrigos = []

//função cadastrar 
function cadatro() {
    let nome = prompt('nome do abrigo')
    let telefone = Number(prompt('digite o telefone do abrigo'))
    let capacidade = Number(prompt('digite a capacidade de lotação do abrigo'))
    let endereco = prompt('digite o endereço do abrigo')

    let abrigo = {
        nome: nome,
        telefone: telefone,
        capacidade: capacidade,
        endereco: endereco,
    }
  
    abrigos.push(abrigo)
console.log('abrigo cadastrado com sucesso')
console.log(abrigos[abrigos.length -1])
}

//função para listar abrigos
function listar() {
    console.log('listagem de abrigos')
    console.log('-----------------------')
    console.log('NOME | TELEFONE | CAPACIDADE | ENDERECO')
    console.log('-----------------------')
    
    for (let i = 0; i < abrigos.length; i++){
        let abrigo = abrigos[i];
        console.log(`${abrigo.nome} | ${abrigo.telefone} | ${abrigo.capacidade} | ${abrigo.endereco}`)

     
    if (abrigo.nome ===)

    }
}