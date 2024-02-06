import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps {
    content: string
}

export function Tweet(props: TweetProps) {
    return (
        <Link to="/status" className="tweet" >
            <img src="https://github.com/marcelobotardo.png" alt="Marcelo Botardo" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Marcelo Botardo</strong>
                    <span>@marcelobotardo</span>
                </div>
            
                <p>{props.content}</p>
                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        21
                    </button>
                    <button type="button">
                        <ArrowClockwise />
                        9
                    </button>
                    <button type="button">
                        <Heart />
                        12
                    </button>
                </div>
                </div>
        </Link>
        
    )
}