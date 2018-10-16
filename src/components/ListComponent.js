import React, {Component} from 'react';
import {Movie} from './Movie';
import { MovieForm } from './MovieForm';
import {connect} from 'react-redux';
import { listToggle } from '../redux/actions';

const GRAN_TORINO = { title: "Gran Torino", director: "Clint EastWood", img:"https://upload.wikimedia.org/wikipedia/ca/0/08/Gran_Torino.jpg" };

const movies = [
    { title: "Jurassic Park", director: "Steven Spielberg", img:"https://is3-ssl.mzstatic.com/image/thumb/Video128/v4/16/ec/1d/16ec1d49-bd88-f23c-393d-0a850c0ca1c9/contsched.rwjqgfdx.lsr/268x0w.jpg" },
    { title: "Sharknado", director: "Anthony C. Ferrante", img:"https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},
    { title: "Titanic", director: "James Cameron", img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/titanic-records-1512578589.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*"}
]


class _ListComponent extends Component {

    deleteMovieByIndex(idx){
        this.state.movies.splice(idx,1);
        this.setState({movies:this.state.movies});
    }

    addMovieToArray(movie){
        this.state.movies.unshift(movie);
        this.setState({movies:this.state.movies});
    }
    
    toggleMovies = () => {
        console.log("TOGGLING");
        console.log(this.props);
        this.props.dispatch(listToggle(this.props.listEnabled))
    }

    render(){
        let enableMovies = this.props.listEnabled;
        console.log(this.props)
        return (
            <div style={{padding:'50px 0'}}>
                <MovieForm movieReady={movie => this.addMovieToArray(movie)}/>
                <button onClick={this.toggleMovies}>{enableMovies ? 'Disable':'Enable'} Movies</button>
                {enableMovies && 
                    <div>
                        <div style={{background:"blue", width:50, height:50}} onClick={()=> this.addMovieToArray(GRAN_TORINO)}></div>
                        {movies.map((e,i) => <Movie key={e.title} onDelete={()=>this.deleteMovieByIndex(i)} {...e}/>)}
                    </div>
                }
            </div>
        )
    }
}

export const ListComponent = connect(state => state)(_ListComponent);
