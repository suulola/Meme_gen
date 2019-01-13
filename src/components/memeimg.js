import React from 'react'

function InputText (props) {
    return(<div>
       <input className="inputext" type='text' name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}  />
    </div>)
}


class Meme extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes').then(response => response.json())
        .then(response => {
            const  {memes} = response.data
            this.setState({
                allMemeImgs: memes
            })
        })

    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }


    


    render() {
        return(<div>
            <form onSubmit={this.handleSubmit}>
            <InputText 
                name="topText" 
                value={this.state.topText}
                onChange={this.handleChange}
                placeholder='Enter Top Text' />
            <InputText 
                name="bottomText" 
                value={this.state.bottomText}
                onChange={this.handleChange}
                placeholder='Enter Bottom Text' />
            <button>GO</button>
            </form>
            <br />
        <div className='meme'>            
            <img src={this.state.randomImg} 
            alt="meme generator"  />
            <h2 className='top'>{this.state.topText}</h2>
            <h2 className ='bottom'>{this.state.bottomText}</h2>
        </div>

        </div>)
    }
}


export default Meme


