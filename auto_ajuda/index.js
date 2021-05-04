const questions = [
    "Olá! Qual seu nome?",
    "O que você aprendeu hoje?",
    "Como você está se sentindo?",
    "O que você poderia melhorar para amanhã?",
]

const ask = (i = 0) => {
    process.stdout.write("\n\n" + questions[i] + " \n > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }  
})

process.on('exit', () => {
    console.log(`\n\n
    +=============================================+
     * Legal, ${answers[0]}!                     
                                                
     * Hoje você aprendeu:                       
       > ${answers[1]}                           
                                                 
     * Hoje você está se sentindo:                
       > ${answers[2]}                           
                                                
     * Para amanhã, você precisa:                 
       > ${answers[3]}                           
                                                 
    +=============================================+  
    | !!! Volte amanhã para mais reflexões ;) !!! |
    +=============================================+

    `)
})
