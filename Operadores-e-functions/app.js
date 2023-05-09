const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
try{
            return Number.parseFloat(numero);
        } catch(e){
            console.log('numero informado não é valido');
        }
}


readLine.question('Favor informar um número:', (numero1) => {
   
const numeroValidado1 = validarNumeroInformado(numero1);
 
if(numeroValidado1)
        readLine.question('Favor informar outro número:', (numero2) => {
          const numeroValidado2 = validarNumeroInformado(numero2);    


            
   });
   

});