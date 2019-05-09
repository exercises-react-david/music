import React, {useState} from 'react';

function Form(props){

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const updateState = (e) =>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const getSearch = (e) =>{
        e.preventDefault();
        props.checkApiLetter(search);
    }

    return(
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form onSubmit={getSearch}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Songs seeker</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        onChange={updateState}
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Artist name" 
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        onChange={updateState} 
                                        type="text" 
                                        className="form-control" 
                                        name="song" 
                                        placeholder="Song name" 
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Search</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Form;