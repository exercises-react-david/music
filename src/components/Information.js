import React from 'react';

function Information(props){

    if(Object.keys(props.info).length === 0) return null;

    return(
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weiht-bold">
                Artist Information
            </div>
            <div className="card-body">
                <img src={props.info.strArtistThumb} alt="Band"/>
                <p className="card-text">Genre: {props.info.strGenre}</p>
                <h2 className="card-text text-center">Biography</h2>
                <p className="card-text">{props.info.strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${props.info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Information;