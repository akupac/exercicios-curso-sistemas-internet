var satisfaction = true
while (satisfaction) {
    var gasolina = prompt("Qual o valor da gasolina?")
    var alcool = prompt("Qual o valor do alcool?")
    var parametro = parseFloat(alcool / gasolina)
    var maisEmConta = ""
    if (parametro > 0) {
        if (parametro == 0.7) {
            maisEmConta = "Olha, dá no mesmo abastecer com um ou outro"
        }
        if (parametro < 0.7) {
            maisEmConta = "Tá valendo mais abastecer com álcool"
        }
        if (parametro > 0.7) {
            maisEmConta = "Tá valendo mais abastecer com gasolina"
        }
        alert(maisEmConta)
    } else {
        prompt('Algum valor foi inserido de forma inválida. Valores: gasolina = ' + gasolina + ' e álcool = ' + alcool + '. Aperte a tecla Enter para continuar no programa')
    }
    var keepGoing = prompt("Você deseja testar um novo valor? Digite \"s\" e depois tecle ENTER para continuar").toLowerCase()
    if (keepGoing != 's') {
        satisfaction = false
        alert('Então tá bom, tchau')
    }
}
