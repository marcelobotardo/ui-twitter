import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

/**
 * Fluxo de renderização:
 * 
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
 */

/**
 * Algoritimo de reconciliação:
 * 
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão, com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somento o necessário no HTML
 */

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')

    const [answers, setAnswers] = useState([
        'Concordo ...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso.'
    ])

    function insertAnswer() {
        if (newAnswer) {
            setAnswers([newAnswer, ...answers])
            setNewAnswer('') 
        }
    }

function createNewAnswers(event: FormEvent) {
    //comando para prevenir o comportamento padrão de redirecionamento
    event.preventDefault()
    //...copia todos os itens do array e coloca o novo
    insertAnswer()
    
}   

function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {        
        insertAnswer()
    }
}
    return (
        <main className="status">
        <Header title="Tweets birdss"/>
        <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eaque cupiditate ab fugit nisi dolores eligendi tempore voluptate dolorum similique officia illum, itaque ex repellat, doloribus voluptatem ducimus laudantium eveniet." />
        
        <Separator />

        <form className="answer-tweet-form" onSubmit={createNewAnswers}>
        <label htmlFor="tweet">
            <img src="https://github.com/marcelobotardo.png" alt="Marcelo Botardo" />
            <textarea 
                id="tweet" 
                placeholder="Tweet your answer" 
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                    setNewAnswer(event.target.value)
                }}/>
        </label>

        <button type="submit" disabled={newAnswer==''}>
            <PaperPlaneRight />
            <span>Answer</span>
        </button>
        </form>

        {answers.map( answer => {
          return <Tweet key={answer} content= {answer} />
        })}
        </main>        
    )
}