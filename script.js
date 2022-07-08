//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
  console.log("Mostrar mensagem")
}
mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function recebeNome(nome){
  console.log(nome)
}
recebeNome("Luccas");
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function sobre (nome, idade, estiloMusuical){
  console.log(nome, idade, estiloMusuical)
}

sobre("Luccas", 20, "Rap")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function entretenimento (filme, musica) {
  console.log(filme, musica)
}

entretenimento("Top Gun", "Fell In Luv")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero){
  return numero * 3
}
const resultado = triplo(7);
console.log(resultado)