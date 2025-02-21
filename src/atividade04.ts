
import leia from "readline-sync"


export default function atividade04() {  

  var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&"
  var quantidadeDigitos;
  var senha = []
  var n:any = []
  
  quantidadeDigitos = leia.questionInt("QUANTIDADE DE DIGITOS DA SENHA: ")
  for(var i = 0; i<quantidadeDigitos; i++){
      n= Math.trunc(Math.random() * 68);
      senha.push(char[n])
      
  }
  
  console.log("Senha gerada: " + senha);
  
 
}