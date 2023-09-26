const Produtos = [
    {
        nome: 'Calça jeans slim',
        unidadesVendidas: 900
    },
    {
        nome: 'Camisa estampada',
        unidadesVendidas: 670
    },
    {
        nome: 'Vestido de festa',
        unidadesVendidas: 550
    },
    {
        nome: 'Camisa social',
        unidadesVendidas: 500
    },
    {
        nome: 'Roupas infantis',
        unidadesVendidas: 410
    },
    {
        nome: 'Blusa de frio moletom',
        unidadesVendidas: 320
    }
]
const Vendas = [
    {
        mes: 'Jan',
        total: 38000
    },
    {
        mes: 'Fev',
        total: 35000
    },
    {
        mes: 'Mar',
        total: 30000
    },
    {
        mes: 'Abr',
        total: 28000
    },
    {
        mes: 'Mai',
        total: 32000
    },
    {
        mes: 'Jun',
        total: 31000
    },
    {
        mes: 'Jul',
        total: 30000
    },
    {
        mes: 'Ago',
        total: 28000
    },
    {
        mes: 'Set',
        total: 29000
    },
    {
        mes: 'Out',
        total: 30000
    },
]

if (!localStorage.getItem('user')) {
    localStorage.setItem('user', 'admin')
    localStorage.setItem('senha', 'admin')
    localStorage.setItem('email', 'admin@admin.com')
}

//Perfil
function loadPerfil() {
    const campoNome = document.getElementById('nome')
    const campoSenha = document.getElementById('senha')
    const campoEmail = document.getElementById('email')
    campoEmail.innerText = localStorage.getItem('email')
    campoNome.innerText = localStorage.getItem('user')
    campoSenha.innerText = localStorage.getItem('senha')
}

//Login
function loadLogin(){
    const formLogin = document.getElementById('form-login')
    const inputUsu = document.getElementById('caixalog')
    const inputPas = document.getElementById('caixapas')
    let usuario, senha
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()
        usuario = inputUsu.value
        senha = inputPas.value
        if (usuario === localStorage.getItem('user') && senha === localStorage.getItem('senha')) {
            window.open('vendas.html', "_self")
        }
        else {
            window.alert("usuário ou senha incorretos")
        }
    })
}

//AlterarSenha
function loadPassChanger() {
    const formPass = document.getElementById('form-change-pass')
    const oldPassInput = document.getElementById('old-pass')
    const newPassInput = document.getElementById('new-pass')
    formPass.addEventListener('submit', (event) => {
        event.preventDefault()
        let antiga = oldPassInput.value
        let nova = newPassInput.value
        if (antiga === localStorage.getItem('senha')) {
            localStorage.setItem('senha', nova)
            window.open('Sucess.html', "_self")
        }
        else {
            alert("A senha antiga está incorreta")
        }

    })
}

//Produtos
function loadProd(){
    const listaProd = document.getElementById('listaProd')
    Produtos.map(produto => {
        listaProd.innerHTML += `<li>${produto.nome} - ${produto.unidadesVendidas} unidades</li>`  
    })
}
//Vendas
function loadVendas(){
    const colunasTabVendas = document.getElementById('linha1-vendas')
    const linhaTabVendas = document.getElementById('linha2-vendas')
    Vendas.map(venda => {
        console.log(venda)
            colunasTabVendas.innerHTML += `<th>${venda.mes}</th>`
            linhaTabVendas.innerHTML += `<td>${venda.total}</td>`
    })
}
