let continuar = true
let abrigos = []

//Função cadastro
function cadastrar() {
    let nome = prompt('Nome do abrigo')
    let telefone = Number(prompt('Digite o telefone do abrigo'))
    let capacidade = Number(prompt('Digite a capacidade de lotação do abrigo'))
    let endereco = prompt('Digite o endereço do abrigo')

    let abrigo = {
        nome: nome,
        telefone: telefone,
        capacidade: capacidade,
        endereco: endereco,
    }
  
    abrigos.push(abrigo)
console.log('Abrigo cadastrado com sucesso')
console.log(abrigos[abrigo.length -1])
}


//Função para listar abrigos
function listar() {
    console.log('Listagem de abrigos:')
    
    for (let i = 0; i < abrigos.length; i++){
        let abrigo = abrigos[i];
        console.log(`|NOME:${abrigo.nome}| |TELEFONE:${abrigo.telefone}| |CAPACIDADE:${abrigo.capacidade}| |ENDEREÇO:${abrigo.endereco}|`)

    }
}

// Função para procurar abrigo
 function buscarAbrigo() {
    let buscar = prompt('Qual abrigo desejado')
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("Abrigo encontrado com sucesso");
    console.log("Abrigo:");
 
    for (let i = 0; i < abrigos.length; i++) {
        let abrigo = abrigos[i];



 // Verifique se o nome do abrigo corresponde ao que está sendo buscado
        if (abrigo.nome === buscar) {
            console.log(`|NOME:${abrigo.nome}| |TELEFONE:${abrigo.telefone}| |CAPACIDADE:${abrigo.capacidade}| |ENDEREÇO:${abrigo.endereco}|`);
        }
    }
 }
 
 // Função para sair
function sair() {
    continuar = false;
    console.log("O programa foi encerrado com sucesso.")
}

// Loop para perguntar ao usuário
while (continuar) {
    let pergunta = "\n";
    pergunta += " Sistema para cadastro de abrigos para CRIANÇAS em situação de vulnerabilidade\n";
    pergunta += "Escolha uma opção:\n";
    pergunta += "Digite (1) = Cadastrar abrigos\n";
    pergunta += "Digite (2) = Listar abrigos\n";
    pergunta += "Digite (3) = Buscar  abrigos\n";
    pergunta += "Digite (0) = Sair\n";


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
        case 0:
            sair();
            break;
    }
}