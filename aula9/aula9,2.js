// importando o módulo readline
const readline = require('readline');
// criando uma instancia de interface de leitura e escrita
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 //solicintando ao usuario que insira sua idade 
 rl.question ('qual a sua idade?',(idade)=>{
   // exibindo a idade inserida pelom usuário
  
  
//fechando a interface de leitura

 


    
    rl.close();
 })