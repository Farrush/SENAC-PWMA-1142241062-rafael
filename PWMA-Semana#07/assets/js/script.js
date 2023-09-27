const produtos = [
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
//Dados de venda total por mês, de jan 2022 a jan 2024
const vendas = [
    {
        ano: 2022,
        mes: 1,
        total: 32000
    },
    {
        ano: 2022,
        mes: 2,
        total: 33000
    },
    {
        ano: 2022,
        mes: 3,
        total: 27000
    },
    {
        ano: 2022,
        mes: 4,
        total: 26000
    },
    {
        ano: 2022,
        mes: 5,
        total: 30000
    },
    {
        ano: 2022,
        mes: 6,
        total: 28000
    },
    {
        ano: 2022,
        mes: 7,
        total: 27000
    },
    {
        ano: 2023,
        mes: 8,
        total: 25000
    },
    {
        ano: 2022,
        mes: 9,
        total: 27000
    },
    {
        ano: 2022,
        mes: 10,
        total: 26000
    },
    {
        ano: 2022,
        mes: 11,
        total: 33000
    },
    {
        ano: 2022,
        mes: 12,
        total: 38000
    },
    {
        ano: 2023,
        mes: 1,
        total: 36000
    },
    {
        ano: 2023,
        mes: 2,
        total: 35000
    },
    {
        ano: 2023,
        mes: 3,
        total: 30000
    },
    {
        ano: 2023,
        mes: 4,
        total: 28000
    },
    {
        ano: 2023,
        mes: 5,
        total: 32000
    },
    {
        ano: 2023,
        mes: 6,
        total: 31000
    },
    {
        ano: 2023,
        mes: 7,
        total: 30000
    },
    {
        ano: 2023,
        mes: 8,
        total: 28000
    },
    {
        ano: 2023,
        mes: 9,
        total: 29000
    },
    {
        ano: 2023,
        mes: 10,
        total: 30000
    },
    {
        ano: 2023,
        mes: 11,
        total: 36000
    },
    {
        ano: 2023,
        mes: 12,
        total: 40000
    },
    {
        ano: 2024,
        mes: 1,
        total: 38000
    },
]

function mediaCrescimentoMensal() {
    // Array com as médias que será retornado
    let crescimento = []
    // Laço de repetição de 1 a 12 para representar meses
    for (let i = 1; i <= 12; i++) {
        // Em cada mês, reúne os dados de venda de cada mês em um array junto
        let comparaMeses = vendas.filter(venda => venda.mes === i)
        let media = 0
        let quantidadePMedia = 0
        //Laço que percorre cada objeto do comparaMeses
        for (let e = 0; e < comparaMeses.length; e++) {
            // Se o indice for 0, ele não vai fazer essa verificação de array[0] menos array[-1]
            if (e - 1 >= 0) {
                //Média recebe ela mesma + a diferença do valor atual e o do mesmo mês no ano anterior
                media += comparaMeses[e].total - comparaMeses[e - 1].total
                //Soma ao valor que a média será dividida
                quantidadePMedia++
            }
        }
        media = media / quantidadePMedia
        //Adiciona no array de crescimento o objeto com os valores mês e média
        crescimento.push({ mes: i, media: media })
    }
    return crescimento
}

const crescimentoMensal = mediaCrescimentoMensal()

console.log("Array de Média de crescimento por mês:")
console.log(crescimentoMensal)

//construção do array que armazena a previsão de venda para os próximos 12 meses (Problema: Ele Lê o array de vendas inteiro e cria projeções para um mês que até já aconteceu)
const previsaoVendas = vendas.map((venda, index) => {
    return {
        // Cada objeto em previsaoVendas tem o próprio venda, com ano + 1, um valor de crescimento bom, um normal e um ruim.
        ...venda,
        ano: venda.ano + 1,
        otimo: venda.total + crescimentoMensal[venda.mes - 1].media + 2000,// Essa média de crescimento vem de outro método
        regular: venda.total + crescimentoMensal[venda.mes - 1].media + 200,
        ruim: venda.total + crescimentoMensal[venda.mes - 1].media - 2000
    }
})

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
function loadLogin() {
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
        if (antiga === sessionStorage.getItem('senha')) {
            sessionStorage.setItem('senha', nova)
            window.open('Sucess.html', "_self")
        }
        else {
            alert("A senha antiga está incorreta")
        }

    })
}

//Produtos
function loadProd() {
    const listaProd = document.getElementById('listaProd')
    produtos.map(produto => {
        listaProd.innerHTML += `<li>${produto.nome} - ${produto.unidadesVendidas} unidades</li>`
    })
}
//Vendas
function loadVendas() {
    const vendaAno = document.getElementById('linha-ano-vendas')
    const projAno = document.getElementById('proj-ano')
    const colunasTabVendas = document.getElementById('linha1-vendas')
    const linhaTabVendas = document.getElementById('linha2-vendas')
    const mesesProj = document.getElementById('linha-meses-proj')
    const linhaOtimo = document.getElementById('linha-ot')
    const linhaRegular = document.getElementById('linha-reg')
    const linhaRuim = document.getElementById('linha-ruim')
    vendas.map((venda, index) => {
        if (index >= vendas.length - 12) { // Exibe apenas os ultimos 12 meses, mas poderia mostrar tudo
            vendaAno.innerHTML += `<th>${venda.ano}</th>`
            colunasTabVendas.innerHTML += `<th>${getMes(venda.mes)}</th>`
            linhaTabVendas.innerHTML += `<td>${venda.total}</td>`
        }

    })
    previsaoVendas.map((venda, index) => {
        if (index >= vendas.length - 12) { // Exibe apenas os últimos 12 objetos de previsão de vendas, o que exibe o mês que vem e mais 11 meses
            projAno.innerHTML += `<th>${venda.ano}</th>`
            mesesProj.innerHTML += `<th>${getMes(venda.mes)}</th>`
            linhaOtimo.innerHTML += `<td>${venda.otimo}</td>`
            linhaRegular.innerHTML += `<td>${venda.regular}</td>`
            linhaRuim.innerHTML += `<td>${venda.ruim}</td>`
        }
    })
}
function getMes(numero) {
    let mes
    switch (numero) {
        case 1:
            mes = "Janeiro"
            break;
        case 2:
            mes = "Fevereiro"
            break;
        case 3:
            mes = "Março"
            break;
        case 4:
            mes = "Abril"
            break;
        case 5:
            mes = "Maio"
            break;
        case 6:
            mes = "Junho"
            break;
        case 7:
            mes = "Julho"
            break;
        case 8:
            mes = "Agosto"
            break;
        case 9:
            mes = "Setembro"
            break;
        case 10:
            mes = "Outubro"
            break;
        case 11:
            mes = "Novembro"
            break;
        case 12:
            mes = "Dezembro"
            break;
        default:
            mes = "inválido"
    }
    return mes
}
