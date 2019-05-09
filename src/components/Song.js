import React from 'react';

function Song(props){

    if(props.letter.length === 0) return null;

    return(
        <React.Fragment>
            <h2>song lyrics</h2>
            <p className="letra">{props.letter}</p>
        </React.Fragment>
    )
}

export default Song;