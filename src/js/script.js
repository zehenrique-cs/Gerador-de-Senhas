const botao = document.getElementById("gerar")

botao.addEventListener("click", gerarSenha())

function gerarSenha() {
  const tamanho = document.getElementById("tamanho").value
  const minusculas = document.getElementById("minusculas").checked
  const numeros = document.getElementById("numeros").checked
  const simbolos = document.getElementById("simbolos").checked

  let caracteres = ""

  if (minusculas) caracteres += "abcdefghijklmnopqrstuvwxyz"
  if (numeros) caracteres += "0123456789"
  if (simbolos) caracteres += "!@#$&"

  if (caracteres === "") {
    alert("Selecione pelo menos uma opção!")
    return
  }

  let senha = ""

  for (let i = 0; i < tamanho; i++) {
    const random = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[random]
  }

  document.getElementById("resultado").textContent = senha
}