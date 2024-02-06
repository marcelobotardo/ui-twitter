import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const tweets = [
    'Meu primeiro tweet',
    'Segundo tweet',
    'Terceirando o tweet!'
  ]

import  './Timeline.css'

export function Timeline() {
    return (
        <main className="timeline">
        <Header title="Home"/>


        <form className="new-tweet-form">
        <label htmlFor="tweet">
            <img src="https://github.com/marcelobotardo.png" alt="Marcelo Botardo" />
            <textarea id="tweet" placeholder="What's happening?"></textarea>
        </label>

        <button type="submit">Tweet</button>
        </form>

        <Separator />

        {tweets.map( tw => {
        return <Tweet key={tw} content= {tw} />
        })}
        </main>        
    )
}
