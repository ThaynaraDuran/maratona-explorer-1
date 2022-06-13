const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente que sim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta() {

  if (inputPergunta.value == "") {
    alert("Para prosseguir, digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const posicaoAleatoria = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[posicaoAleatoria]

  
  elementoResposta.style.opacity = 1;

  //sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)

}