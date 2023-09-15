let continuar = true
let abrigos = []

//Função cadastro
function cadastrar() {
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


//Função para listar abrigos
function listar() {
    console.log('listagem de abrigos')
    console.log('-----------------------')
    console.log('NOME | TELEFONE | CAPACIDADE | ENDERECO')
    console.log('-----------------------')
    
    for (let i = 0; i < abrigos.length; i++){
        let abrigo = abrigos[i];
        console.log(`${abrigo.nome} | ${abrigo.telefone} | ${abrigo.capacidade} | ${abrigo.endereco}`)

    }
}

// Função para procurar abrigo
 function buscarAbrigos() {
    let buscar = prompt('qual abrigo desejado')
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("NOME | TELEFONE | CAPACIDADE | ENDERECO");
    console.log("---------------------------------------------------------------");
 
    for (let i = 0; i < abrigos.length; i++) {
        let abrigos = abrigos[i];


        // Verifique se o nome do abrigo corresponde ao que está sendo buscado
        if (abrigos.nome === buscar) {
            console.log(`${abrigos.nome} | ${abrigos.telefone} | ${abrigos.capacidade} | ${abrigos.endereco}`);
        }
    }
 }
 
 // Função para sair
function sair() {
    continuar = false;
    console.log("O programa foi encerrado.")
}

// Loop para perguntar ao usuário
while (continuar) {
    let pergunta = "\n";
    pergunta += "===== SISTEMA DE CADASTRO DE ABRIGOS=====\n";
    pergunta += "Escolha uma opcao:\n";
    pergunta += "1. Cadastrar Abrigos\n";
    pergunta += "2. Listar abrigos\n";
    pergunta += "3. Buscar  Abrigos \n";
    pergunta += "4. Sair\n";
    

    let resposta = Number(prompt(pergunta));
    

    switch (resposta) {
        case 1:
            cadastrar();
            break;
        case 2:
            listar();
            break;
        case 3:
            buscarAbrigo();
            break;
        case 4:
            sair();
            break;
    }
}