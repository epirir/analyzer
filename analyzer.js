// Compilador

let keywords = [
    'FOR',
    'DO',
    'TO',
    'PRINTF',
    'NEXT',
]

let ids = [
    'i'
]

let operators = [
    '=',
    '(',
    ')',
    '+'
]

const button = document.getElementById('analyze')

button.addEventListener('click', event => {

    document.getElementById('result').innerHTML = ''

    let code = document.getElementById('code').value

    if(code == ''){
        alert('Ingresar código a analizar')
        return
    }

    let syntax = code.split('\n');

    let result = ''

    syntax.map( e => {
        
        let row = e.split(' ')

        row.map(e => {
            // 
            if(keywords.includes(e)){

            result += 'PR['+e+']\n\r'

            }else if(ids.includes(e)){

                result += 'ID['+e+']\n\r'

            }else if(operators.includes(e)){

                result += 'OP['+e+']\n\r'

            }else if(Number.isInteger(parseInt(e))){

                result += 'NUM['+e+']\n\r'
                
            }else if(e.charAt(0) == "'" && e.charAt(e.length-1) == "'"){
                result += 'LT['+e+']\n\r'
            }
        })
    })

    document.getElementById('result').innerHTML = result

});

