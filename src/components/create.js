import React from 'react';
import axios from 'axios'; 


export class Create extends React.Component{

    constructor(){
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }

    }
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();
        alert('Movie: '+ this.state.Title + " " 
        + this.state.Year + " " +
         this.state.Poster);

         const newMovie = {
             Title:this.state.Title,
             Year:this.state.Year,
             Poster:this.state.Poster
         }

         axios.post('http://localhost:4000/api/movies', newMovie)
         .then((res) => {
             console.log(res);
         })
         .catch((err) =>{
          console.log(err);
    });
}

    render(){
        return(
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title:</label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>

                    </div>
                    <div className='form-group'>
                    <label>Add Movie Year:</label>
                    <input type='text'
                    className='form-control'
                    value={this.state.Year}
                    onChange={this.onChangeYear}></input>
                    </div> 
                    <div className='form-group'>
                        <label> Movie Poster: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}></textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                        value='Add Movie'
                        className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }

}
// added the create.js file to the app js 

//added constructor and state set to blank

//form added with submit button 
//onSubmit method added

//methods added to input control

//alert added

//text area added

//axios imported post request to local host4000 made
//added then and catch methods, catch methods incase theres a bug