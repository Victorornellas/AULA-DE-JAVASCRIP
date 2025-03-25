// Primiros passos JavaScrip;

/* Java scrip é uma linguagem de progamação que permite implementar interatividade e funcionalidade nas páginas web */
/*
console.log("hello word")
console.log("TESTE")
*/

// > (//) Comentario para uma linha; (/* */) cometario para varias linhas

// Sintexa é maneira correta de escrever os codigos

//No Javascript ponto e vírgula é opcional.

// ################################################################################

//Variáveis e Constantes;

//Variavel na progamação é um espaço reservado na memoria ram do computador para armazenar algo temporariamente 

/*Declara uma Variavel sem valor.
    var user
    console.log(user)  

Declara uma variavel com valor.
    var email = "victorhugoornellas@gmail.com"
    console.log(email)

Susbitiuir o valor da varivavel
    email = "victorhugo@gmail.com"
    console.log(email)
*/

/* Case-sensitive siginfica que ela é sensivel a letras maisculas e minusculas
Por exemplo: "Victor" é considerado diferente de "victor".


    var product = "teclado mecanico"
    var Product = "mouse gamer"
    var product = "fone sem fio"
    console.log(product)

a variavel "fone sem fio" sobrescreveu a "teclado mecanico"
*/

/*Declara uma variavel sem valor (let)
    let user 
    console.log("Victor Hugo")

declara uma variavel com valor

    let email = "victorhugo@email.com"
    console.log(email)

    email = "victorhugoornellas@email.com"
    console.log(email)
*/

/*Declara uma varivel (const) => Uma constante cria uma variavel cujo valor é fixo(nao pode ser alterado)
    const number = 42
    console.log(number)
Irá gerar um erro porque o valor nao pode ser alterado.
    number = 55
    console.log(number)
*/

/* Escopo é a regiao do codigo onde uma determiada variavel é acessivel ou visivel.

o escopo define o contexto no qual uma variavl pode ser referenciada e modificada.

Tipos de escopo: Global > variavel declaradas fora de qualquer função ou bloco de codigo (var); Bloco > Acessiveis apenas dentro do bloco de codigo onde foram declaradas (let e const).
*/

/* Hosting (levantar ou içar) se refere ao comportamento do interpretador de mover as declarações de variaveis e funçoes para o topo do escopo em que foram definidas, antes mesmo da execução do codigo. 

Esse comportamento possibilita usar uma varaivel ou função antes que ela esteja definida.
*/

/* Nomes para variaves (case-sensitive)
    let username = "Victor"
    let userName = "victor"

    console.log(userName)
    console.log(username)

Podemos
    let $email = "victorhugo@email.com"
    let _email = "victorhugo1@email.com"
    console.log($email)
    console.log(_email)

Não podemos > Nao usar numeros, Espaço no meio da variavel
     let product name = "mouse gamer"

    let 1user = "ana"

Recomendações > Escrever em ingles, não usar caracteres especias ou acentos, colocar nomes nas variaves que fazem sentido ao valor, camelCase (productName); snake_case (product_name).
*/

/*Tipos de dados; Tipos primitivos (principais) = String (texto); Number (numeros); Boolean (verdadeiro ou falso); Null (vazio); Underfind (indefinido)

String: 
    let username = "Victor"
    console.log(username)
    console.log(typeof username)

    console.log("uma string com aspas")
    console.log('uma string com apostrofo (aspas simples')
    
 Quando utilizar uma ou outra

    console.log('uma string com "aspas duplas" dentro de simples')

    console.log("Uma string com 'aspas simples' dentro de dupla")
Outra forma

    console.log(`uma string com acento grave permite
    escrever multiplas linhas.`)


Template literals (template strings, interpolação de strings)
    let username = "Victor"
    let email = "victor@email.com"
Passar mais de um paramentro
    console.log(username, email, "teste")
Concatenar texto
    let message = "Olá, " + username + ". Você conectou com o email: " + email
    console.log(message)
 

Template literals
    console.log(`Olá, ${username}. Você conectou com o emal: ${email}`)

Number
    console.log(typeof 5)

Inteiro positivo
    console.log(5)

Inteiro negativo
    console.log(-5)

Numeros reais ou float. (Usar ponto e nao virgula)
    console.log(125.70)

Nan - not a number
    console.log(12.5 / "victor")


Boolean
    console.log(true)
    console.log(false)

    console.log(typeof false)

    let isLoading = true
    console.log(isLoading)


Underfined e null

    let emptiness 
    console.log("o valor é: ", emptiness)

    let empty = null
    console.log("o valor é: ", empty)

Conversão de tipos (type casting ou type conversion): Ocorre quando voce explicitamente transforma um valor de um tipo para outro. Isso é feitode forma consciente, usando funções ou metedos especificos para realizar a conversão


    let value = "9"
    console.log(typeof value)
    console.log(typeof Number(value))

    let age = 18
    console.log(typeof age.toString())
    console.log(typeof String(age))

    let option = 1
    console.log(Boolean(option))
    console.log(typeof Boolean(option))

Coeção de tipos: Acontece de forma automatica (implicitamente). O javascrip tenta automaticamente converter um dos valores para um tipo compativel antes de realizar a operação


    console.log(typeof ("10" + 5)) 


Expressoes e operadores: Expressao é uma combinação de valores, variasveis, operadores e chamadas de função que, quando avaliada, resulta em um valor.
     let sum = 5 + 3 + 7;

     let average = sum / 3

     console.log(sum, average)


Operadores aritmeticos
    console.log("SOMA: ", 12 + 8)
    console.log("CONCATENAÇÃO: ", "12" + "8")
    console.log("SUBTRAÇÃO: ", 12 - 8)
    console.log("MULTIPLICAÇÃO: ", 12 * 8)
    console.log("DIVISÃO: ", 12 / 8)
    console.log("RESTO DA DIVISÃO: ", 12 % 8)
    console.log("EXPONECIAL: ", 12 ** 8)



Incremento e decremento
    let number = 10
number = number + 1
    number++ //(Incremento)
Incrementa após (por isso não mostra no console)
    console.log(number++)
    console.log(number)
Incrementa antes
    console.log(++number)
Decremento
    console.log("Decremento após: ", number--)
    console.log(number--)
    console.log("Decremento antes: ", --number)
    console.log(--number)
Incrementa mais de um
    number += 10
    console.log(number)
Decrementa mais de um
    number -= 2
    console.log(number)



Igual a e diferente de 
== igual a
    let one = 1
    let two = 2
    console.log("### IGUAL A ###")
    console.log(one == two)
    console.log(one == one)
    console.log(one == "1")
!= diferente de
    console.log("### DIFERENTE DE ###")
    console.log(one != two)
    console.log(one != 1)
    console.log(one != "1")

=== Estritamente igual a (Olha o tipo e valor)
    let one = 1
    let two = 2

    console.log(one === one)
    console.log(one === "1")

!== estritamente diferente de

    console.log(one !== two)
    console.log(one !== 1)
    console.log(two !== 2)
    console.log(two !== "2")


Maior, menos e igual
    let balance = 500
    let payment = 120

operador de maior que >
    console.log(balance > payment)

operador de menor que <
    console.log(balance < payment)

operador de maior ou igual a >=
    balance = 120
    console.log (balance >= payment)

operador de menor ou igual a <=
    balance = 500
    console.log(balance <= payment)



Operadores logico
    let email = true
    let password = true
AND (E) && (os dois tem que ser verdadeiro)
    console.log(email && password)

OR (OU) || (Apenas 1 tem que ser o verdadeiro)
    console.log(email || password)

NOT (Negação) !
    console.log(!password)


// Condicionais e controle de fluxo
//Permite executar diferentes ações com base em uma condição (true or false)
// Operador condicional ternario
    let age = 18
    console.log(
    age >= 18 // Condição
    ? "Você pode dirigir" // se é verdaderio
    : "voce não pode dirigir." // se é falso
)

console.log(
    age < 18
    ? "você não pode dirigir"
    : "você pode dirigir"
)
Falsy é quando um valor é considerado false e Truthy é considerado verdadeiro em contexto onde um boolean é obrigatorio (condicionais e loops)


    console.log("### EXEMPLOS DE FALSY ###")
    console.log(false ? "verdadeiro" : "falso")
    console.log(0 ? "verdadeiro" : "falso")
    console.log(-0 ? "verdadeiro" : "falso")
    console.log("" ? "verdadeiro" : "falso")
    console.log(null ? "verdadeiro" : "falso")
    console.log(undefined ? "verdadeiro" : "falso")
    console.log(NaN ? "verdadeiro" : "falso")
    console.log("### EXEMPLOS DE TRUTHY ###")
    console.log(true ? "verdadeiro" : "falso")
    console.log({} ? "verdadeiro" : "falso")
    console.log([] ? "verdadeiro" : "falso")
    console.log(1 ? "verdadeiro" : "falso")
    console.log(1.337 ? "verdadeiro" : "falso")
    console.log("Victor" ? "verdadeiro" : "falso")
    console.log(" " ? "verdadeiro" : "falso")
    console.log(-50 ? "verdadeiro" : "falso")
    console.log(Infinity ? "verdadeiro" : "falso")

// Estrutura de condição if

let hour = 11
if(hour <= 12){
    console.log("Bom dia")
}

// Estrutura de condição if else

let age = 17

if( age < 18){
    console.log("você não pode dirigir")
} else {
    console.log("Você pode dirigir")
}

// Estrutura de condição if else if

    let hour = 15

    if(hour <= 12){
        console.log("bom dia")
    }
    else if(hour > 18){
        console.log("boa noite")
    }
    else if(hour > 12){
        console.log("boa tarde")
    }

    #########################

    if(hour <= 12){
        console.log("bom dia")
    }
    else if(hour > 12 && hour <= 18){
        console.log("boa tarde")
    } else {
        console.log("boa noite")
    }


//Switch

let option = 3

switch(option){
 case 1: 
    console.log("consultar pedido")
    break
 case 2:
    console.log("falar com atendente")
    break
 case 3:
    console.log("cancelar pedido")
}



// Tratamento de exceção try / catch / finally

    try{
        // TENTA executar algo.
        console.log(result)
    } catch(error) {
        // CAPTURA o erro para tratar
        console.log(error)
    } finally {
        console.log("fim")
    }

// ##########################

    let result = 0 

    try {
        if(result === 0) {
            throw new Error ("o valor é igual a zero")
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log("fim")
    }


// Funções

function message(){
    console.log("olá. é bom ter voce aqui")
}
message()


// Paramentros: é a variavel (escopo da função) que irá receber um valor em uma função; Argumentos: é o valor que é passado para a função

// Passando o paramentro username.
function message(username){
    console.log("olá,", username)
}

// Passando argumentos
    message("victor")
    message("Yarmin")

    function sum(a, b){
        console.log(a + b)
    }

    sum(10,20)
    sum(54,20)

//Definindo um valor (argumento) padrão
    function joinText(text1, text2 = "", text3 = ""){
        console.log(text1, text2, text3)
    }

    joinText("Victor", "Hugo", "Ornellas")
    joinText("Hugo", "Victor",  "Ornellas")
    joinText("Victor")


// Retornando valores
function sum(a,b){
    let result = a + b

    return result
}

let response = sum(7,7)
console.log(response)


// Escopo de função


showMessage("olá, Victor")
function showMessage(message){
    console.log(message)
}
showMessage("olá, Victor")

function showMessage(message){
    console.log(message)
    endLine()
    
    
    function endLine (){
        console.log("---------")
    }
}
showMessage("olá, Victor")

// Comentario de documentação
/**
 * 
 * @param {string} email user email
 * @param {string} password more than 10 characteres
 */

/*function singIn(email, password){

}

singIn()


// Função anonima (função que nao possui nome)

const showMessage1 = function(){
    return "ola, victor"
}
console.log(showMessage1())


const showMessage2 = function(name){
    return "ola, " + name
}

console.log(showMessage2("Victor"))


//Arow function

    const showMessage1 = () =>{
        console.log("ola")
    }
    console.log(showMessage1)
    showMessage1()


    const showMessage2 = (username, email) =>{
        console.log("ola, ", username, "Seu email é: ", email)
    }

    showMessage2("Yarmin", "yarmin@email.com")
*/

//Função callback: é uma função passada pra outra função como um argumneto

function execute(taskname, callback){
    console.log("Executando a tarefa: ", taskname)

    callback()
}

function callback(){
    console.log("Tarefa finalizada.")
}
// passando para a funçãp
execute("download do arquivo...", callback)

// Criando a funçao no proprio paramento
execute("upload do arquivo....", function(){
    console.log("upload finalizado")
})

// Utlizando arrow funtion
execute("excluindo arquivo", () => {
    console.log("arquivo excluido")
})