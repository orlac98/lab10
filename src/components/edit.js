import React from 'react';
import axios from 'axios'; 


export class Edit extends React.Component{

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


    componentDidMount(){
        console.log('load'+ this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
    .then((response)=>{
        this.setState({
            Title:response.data.Title,
            Year:response.data.Year,
            Poster:response.data.Poster,
            _id:response.data._id
        })
    })
    .catch((err)=>{
        console.log(err);
    });
    }

//making a async call to the server
//callback function written 


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
             Poster:this.state.Poster,
             _id:this.state._id
         };

    //      axios.post('http://localhost:4000/api/movies', newMovie)
    //      .then((res) => {
    //          console.log(res);
    //      })
    //      .catch((err) =>{
    //       console.log(err);
    // });
    axios.put('http://localhost:4000/api/movies'+this.state._id, newMovie)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });
    }

    render(){
        return(
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Edit Movie Title:</label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>

                    </div>
                    <div className='form-group'>
                    <label>Edit Movie Year:</label>
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
                        value='Edit Movie'
                        className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }

}
export default Edit;