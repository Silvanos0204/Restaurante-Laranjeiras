const nome = document.getElementById('campoNome')
const email = document.getElementById('email')
const mensagem = document.getElementById('campoTexto')
const aceito = document.getElementById('campoCheck')
const formulario = document.getElementById('formulario')
const resposta = document.getElementById('resposta')

formulario.onsubmit = event => {
  event.preventDefault()

  if (
    !validarAceite() |
    !validarMensagem() |
    !validarEmail() |
    !validarNome()
  )
    return

  resposta.textContent = 'Seu comentário foi enviado. Obrigado pela colaboração!'
  resposta.className = 'sucesso'

}

function validarNome() {
  nome.value = nome.value.trim()

  if (!nome.value) {
    resposta.textContent = 'Informe seu nome.'
    resposta.className = 'erro'
    nome.focus()
    return false
  }

  return true
}

function validarEmail() {
    email.value = email.value.trim()
  
    if (!email.value) {
      resposta.textContent = 'Informe seu e-mail.'
      resposta.className = 'erro'
      email.focus()
      return false
    }

    return true
}

function validarMensagem() {
  mensagem.value = mensagem.value.trim()

  if (!mensagem.value) {
    resposta.textContent = 'Deixe-nos um comentário.'
    resposta.className = 'erro'
    mensagem.focus()
    return false
  }

  if (mensagem.value.length < 100) {
    resposta.textContent = 'Informe ao menos 50 caracteres!'
    resposta.className = 'erro'
    mensagem.focus()
    return false
  }

  mensagem.classList.remove('erro')
  return true
}

function validarAceite() {
  if (!aceito.checked) {
    resposta.textContent = 'É necessário aceitar os termos de uso.'
    resposta.className = 'erro'
    aceito.focus()
    return false
  }

  aceito.classList.remove('erro')
  return true
}

