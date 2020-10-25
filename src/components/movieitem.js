import React from 'react';
import Card from 'react-bootstrap/Card';


export class Movieitem extends React.Component {

    render() {
        return (
            <div>





                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>

                            <footer className="blockquote-footer">
                                <p> {this.props.movie.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}
// added the create.js file to the app js

// card from react bootstrap added to display movie info neater