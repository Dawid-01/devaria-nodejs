/*operador unário !(negação)
Operadores && e ||. esses operadores avaliam o operando a direita apenas se for necessário, ou de acordo com sua definição */

// Operador unário, serve para invertero valor de um booleano a fim de facilitar a verificação

// Exemplo de uso ! 
/* 
const valido = false;
console.log(!valido); //resultado:true
console.log(!true); //resultado:false
console.log(!!valido); //resultado:false
 */

//Operador lógico &&, checa a primeira condição se ela for false, nem avalia a segunda, só será true se ambas forem true.

// Exemplo de uso &&
/*
function segundoOperador(){
    console.log("Avaliando segundo operador");
    return true;
}
const a = false && segundoOperador();
console.log(a); //false
const b = true && segundoOperador();
console.log(b); //Avaliando segundo operador. True
*/

// Exemplo de uso ||

/*
function segundoOperador(){
    console.log("Avaliando segundo operador");
    return true;
}
const a = false || segundoOperador();
console.log(a); //True
const b = true || segundoOperador(); //quando a primeira condição já é true ele nem verifica a segunda
console.log(b); //Avaliando segundo operador. True
const c = !b || !a;
console.log(c); //avaliação da negação de a e b. false.
*/

//Estrutura de seleção 

//if - verifica se a condição inteira passada entre parenteses é verdadeira, se sim executa o trecho, senão verifica se foi definido uma clausulua else e a executa
//Exemplo

/* const valido = false;
if(valido){
    console.log(valido);
} else {
    console.log(valido);
}
*/

//elseif - executada se o if falha, verifica se a condição inteira passada entre parenteses é verdadeira, se sim, executa o trecho

/*
const valido = false;
const invalido = true;

if(valido){
    console.log("valido");
} else if(invalido) {
    console.log("invalido");
}
*/

//Switch - verifica se algum dos casos informados é verdadeiro, caso seja executa o trecho de código isolado, caso nenhum caso seja atendido executa o default

/*
const nome = "Dawid";

switch(nome){
    case"Lucas":
    console.log("Lucas encontrado");
    break;
    case"Dawid":
    console.log("Dawid encontrado");
    break;
    default:
    console.log("nenhum encontrado");
}
*/
