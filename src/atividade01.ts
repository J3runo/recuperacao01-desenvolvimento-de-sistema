import leia from "readline-sync"

export default function atividade01() {

  let dias = leia.questionInt("INFORME A QUANTIDADE DE DIAS: ")
  let idade = leia.questionInt("INFORME SUA IDADE: ")


  if(dias <= 5 ){
    let total = dias * 100
    if(idade>60){
      total = (total * 0.8)
    }
    console.log(`O VALOR TOTAL DA HOSPEDAGEM: ${total}`)

  }else if(dias >5 && dias){
    let total = dias * 90
    if(idade>60){
      total = (total * 0.8)
    }
    console.log(`O VALOR TOTAL DA HOSPEDAGEM: ${total}` )

  }
  else if(dias > 11 ){
    let total = dias * 80
    if(idade>60){
      total = (total * 0.8)
    }
    console.log(`O VALOR TOTAL DA HOSPEDAGEM: ${total}` )

  }
}