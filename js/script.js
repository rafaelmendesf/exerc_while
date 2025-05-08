function exercicioExemplo(){

    let nota 
    let cont = 0
    let soma = 0

    while (cont <= 6){
        nota = Number(prompt(`Informe a nota do aluno ${cont}: `))
        cont++
        soma = soma + nota
    }

    let media = (soma / 6)
    alert(`A média das notas é ${media.toFixed(1)}`)
}

function pesquisaSatisfacao(){

    let nota 
    let cont = 0
    let sat = 0
    let insat = 0
    let soma = 0

    while (cont < 10){
        nota = Number(prompt(`Informe a nota do aluno ${cont}: `))
        cont++

        if (nota >= 8){
            sat++
            soma = soma + nota
        }
        else if (nota < 5){
            insat++
            soma = soma + nota
        }

    }

    let media = (soma / 10)
    alert(`Média das Notas: ${media.toFixed(1)}`)
    alert(`Total de Satisfeitos: ${sat}`)
    alert(`Total de Insatisfeitos: ${insat}`)
}