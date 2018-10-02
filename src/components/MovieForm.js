import React, {Component} from 'react';
import './MovieForm.css'

export class MovieForm extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            director: '',
            error: ''
        }
    }

    handleSubmit(){
        let { title, director, error} = this.state;
        if(title === '') return this.setState({error:'Empty title'});
        if(director === '') return this.setState({error:'Empty director'});

        if(title === "crepusculo") return this.setState({error:'Esta ni se te ocurra'});

        console.log("FORM OK");
        this.setState({error: '', title:'', director:''});
        this.props.movieReady({title, director});
    }

    render(){
        let { title, director, error} = this.state;
        return (
            <div>
                <p style={{color:"red"}}>{error}</p>
                <label>Titulo de la peli</label>
                <input type="text" value={title} onChange={(e) => this.setState({title:e.target.value})} />
                <label>Director</label>
                <input type="text" value={director} onChange={(e) => this.setState({director:e.target.value})}/>
                <button onClick={this.handleSubmit.bind(this)}>Add movie</button>
            </div>
        )
    }
}
