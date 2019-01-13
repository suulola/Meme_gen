import React from 'react'
import ReactDOM from 'react-dom'
import Meme from './components/memeimg'
import './index.css'

function Display () {
    return (<div>
        
        <Meme />
    </div>)
}

ReactDOM.render(<Display />, document.getElementById('root'))