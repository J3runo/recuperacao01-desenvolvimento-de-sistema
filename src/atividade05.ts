import leia from "readline-sync"

export default function atividade05() {
  let vetorSorteado = [];
  let verde = 0;
  let vermelho = 0;
  let preto = 0;
  
  vetorSorteado.push(Math.random() * 36);
  
  for(let i = 0; i < vetorSorteado.length; i++){
      if(vetorSorteado[i] === 0){
          verde++;
      } else if(vetorSorteado[i] % 2 !== 0){
          vermelho++;
      } else{
          preto++;
      }
  }
  
  let SVermelho = ((vermelho / 100) * vermelho)
  let Spreto = ((preto / 100) * preto)


  if(SVermelho > 40 || Spreto > 40){
  console.log("O DADO ESTA VICIADO");
  }
  else{
      console.log("O DADO NAO ESTA VICIADO");
  }
}