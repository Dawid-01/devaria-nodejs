const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);
let leituraDeCampo;
readLine.question('Please write your name: ', input => {
    leituraDeCampo = input;
    console.log(`User Write: ${leituraDeCampo}`);
});

