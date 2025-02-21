import leia from "readline-sync"



export default function atividade02() {

  let opcao = leia.keyInSelect(["Celsius : Fahrenheit","Celsius : Kelvin","Fahrenheit : Celsius", "Kelvin : Celsius","Kelvin : Fahrenheit" ]) + 1
  let temperatura = leia.questionFloat("INFORME A TEMPERATURA: ")


if(opcao === 1){
  console.log(`A temperatura opcao Celsius para Fahrenheit é ${CelsiusFahrenheit(temperatura)}`)
return
}
if(opcao === 2){
  console.log(`A temperatura opcao Celsius para Kelvin é ${CelsiusKelvin(temperatura)}`)
return
}
if(opcao === 3){
  console.log(`A temperatura opcao Fahrenheit para Celsius é ${FahrenheitCelsius(temperatura)}`)
return
}
if(opcao === 4){
  console.log(`A temperatura opcao Kelvin para Celsius é ${KelvinCelsius(temperatura)}`)
return
}
if(opcao === 5){
  console.log(`A temperatura opcao Kelvin para Fahrenheit é ${KelvinFahrenheit(temperatura)}`)
return
}

  function CelsiusFahrenheit(temperatura:any){
    
    return (temperatura * 1.8) + 32
  }


  function CelsiusKelvin(temperatura:any){
    
    return  temperatura + 273.15
  }

  function FahrenheitCelsius(temperatura:any){
    
  return  (temperatura - 32) * (5/9)
  }

  function KelvinCelsius(temperatura:any){
    
  return   temperatura - 273.15
  }
  function KelvinFahrenheit(temperatura:any){
    
  return   (temperatura - 273.15) * 1.8 + 32

  }


}