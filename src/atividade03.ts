
import leia from "readline-sync"
export default function atividade03() {
 
  let vetorNumerosDigitados = []
  let NumerosDigitados
  let soma = 0
  let maior = 0
  let menor = 0
  let contador = 0
  let media 

  while(NumerosDigitados !== 0){
    NumerosDigitados = leia.questionInt("DIGITE UM NUMERO: ")
    vetorNumerosDigitados.push(NumerosDigitados)

  }

  for(let i=0; i<vetorNumerosDigitados.length; i++){
    soma += vetorNumerosDigitados[i]
    if(vetorNumerosDigitados[i] > maior){
      maior = vetorNumerosDigitados[i]
    }if(vetorNumerosDigitados[i] < menor ){
      menor = vetorNumerosDigitados[i]
    }
    contador++
  }
 media = soma / contador


  console.log( `A MEDIA DOS VALORES É ${media}`)
  console.log( `A SOMA DOS VALORES É ${soma}`)
  console.log( `MAIOR NUMERO DIGITADO: ${maior}`)
  console.log( `MENOR NUMERO DIGITADO: ${menor}`)
}