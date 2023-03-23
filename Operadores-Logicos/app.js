const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Além da suas verificações, precisamos verificar se você está na lista de presença');

readline.question('Qual o ano do seu nascimento?', ano => {

    if(ano > 2004){
        console.log('você não tem 18 anos');
    }else{
        readline.question("Você tem habilitação? (sim/não)", temhabilitação => {
            if(!(temhabilitação.toUpperCase() === "SIM")){
                console.log('você não tem habilitação');
            }else{
                readline.question("Qual é o seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo Douglas');
                            break;
                        case 'Dawid' :
                            console.log('Bem vindo Dawid');   
                            break;
                        case 'Ana' :
                            console.log('Bem vinda Ana');    
                            break;
                    }
                })
            }
        })
    }

})