import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import  './Timeline.css'

//let newTweet = ''

export function Timeline() {    
    const [tweets, setTweets] = useState([
            'Meu primeiro tweet',
            'Segundo tweet',
            'Terceirando o tweet!'
        ])

    const [newTweet, setNewTweet] = useState('')

    function insertTweet() {
        if (newTweet) {
            //...copia todos os itens do array e coloca o novo
            setTweets([newTweet, ...tweets])
            setNewTweet('')        
        }
    }

    function createNewTweet(event: FormEvent) {
        //comando para prevenir o comportamento padrão de redirecionamento
        event.preventDefault()        
        insertTweet()
        
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {        
            insertTweet()
        }
    }    
    
    return (
        <main className="timeline">
        <Header title="Home"/>


        <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
            <img src="https://github.com/marcelobotardo.png" alt="Marcelo Botardo" />
            <textarea 
                id="tweet" 
                placeholder="What's happening?"
                value={newTweet}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {                    
                    setNewTweet(event.target.value)
                }} />
        </label>

        <button type="submit" disabled={newTweet == ''} >Tweet</button>
        </form>

        <Separator />

        {tweets.map( tw => {
        return <Tweet key={tw} content= {tw} />
        })}
        </main>        
    )
}
