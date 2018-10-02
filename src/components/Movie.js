import React from 'react';

export class Movie extends React.Component {
    componentWillUnmount(){
        console.log(`Bye bye ${this.props.title}`);
    }

    render(){
        let {title, director, onDelete, img} = this.props;
        return (
            <div>
                <h2>{title}</h2>
                <p>{director}</p>
                <img src={img} alt="" width={100}/>
                <button onClick={onDelete}> Delete this Bad Movie </button>
            </div>
        )
    }
}