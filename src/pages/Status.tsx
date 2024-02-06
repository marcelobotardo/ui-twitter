import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

const answers = [
    'Concordo ...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
]

export function Status() {
    return (
        <main className="status">
        <Header title="Tweets birdss"/>
        <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eaque cupiditate ab fugit nisi dolores eligendi tempore voluptate dolorum similique officia illum, itaque ex repellat, doloribus voluptatem ducimus laudantium eveniet." />
        
        <Separator />

        <form className="answer-tweet-form">
        <label htmlFor="tweet">
            <img src="https://github.com/marcelobotardo.png" alt="Marcelo Botardo" />
            <textarea id="tweet" placeholder="Tweet your answer"></textarea>
        </label>

        <button type="submit">Answer</button>
        </form>

        {answers.map( answer => {
          return <Tweet key={answer} content= {answer} />
        })}
        </main>        
    )
}