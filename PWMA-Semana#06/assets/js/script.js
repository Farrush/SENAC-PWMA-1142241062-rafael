
if (!sessionStorage.getItem('user')) {
    sessionStorage.setItem('user', 'admin')
    sessionStorage.setItem('senha', 'admin')
    sessionStorage.setItem('email', 'admin@admin.com')
}
//Perfil
function loadPerfil() {
    const campoNome = document.getElementById('nome')
    const campoSenha = document.getElementById('senha')
    const campoEmail = document.getElementById('email')
    campoEmail.innerText = sessionStorage.getItem('email')
    campoNome.innerText = sessionStorage.getItem('user')
    campoSenha.innerText = sessionStorage.getItem('senha')
}

//Login
const formLogin = document.getElementById('form-login')
const inputUsu = document.getElementById('caixalog')
const inputPas = document.getElementById('caixapas')
let usuario, senha
formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    usuario = inputUsu.value
    senha = inputPas.value
    if (usuario === sessionStorage.getItem('user') && senha === sessionStorage.getItem('senha')) {
        window.open('vendas.html', "_self")
    }
    else {
        window.alert("usuário ou senha incorretos")
    }
})

//AlterarSenha
function loadPassChanger() {
    const formPass = document.getElementById('form-change-pass')
    const oldPassInput = document.getElementById('old-pass')
    const newPassInput = document.getElementById('new-pass')
    formPass.addEventListener('submit', (event) => {
        event.preventDefault()
        let antiga = oldPassInput.value
        let nova = newPassInput.value
        if (antiga === sessionStorage.getItem('senha')) {
            sessionStorage.setItem('senha', nova)
            window.open('Sucess.html', "_self")
        }
        else {
            alert("A senha antiga está incorreta")
        }

    })
}
