import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';
import Information from './components/Information';

function App(){

  const [artist, setArtist] = useState('');
  const [letter, setLetter] = useState([]);
  const [info, setInfo] = useState({});

  const checkApiLetter = async (search) =>{
    const {artist, song} = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    setArtist(artist);

    const result = await axios(url);

    setLetter(result.data.lyrics);
  }

  const checkApiInfo = async  () =>{
    if(artist){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const result = await axios(url);
      setInfo(result.data.artists[0]);
    }
    
  }

  useEffect(
    () =>{
      checkApiInfo();
    },[artist]
  )

  return(
    <React.Fragment>
      <Form
        checkApiLetter={checkApiLetter}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Information
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Song
              letter={letter}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;