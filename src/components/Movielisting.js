import  React,{ Component } from 'react';
import MovieList from './MovieList.js';
const API = 'https://api.tvmaze.com/search/shows?q=robin%20hood';

class Movielisting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(API )
      .then(response => response.json())
      .then(data => this.setState({ movies: data }));
  }
  render() {
    return (
      <div className="container-fluid" style={{marginLeft: '-15px'}}>
          <div className="d-flex flex-row">                    
              <div className="col-sm-12">
                  <MovieList movies={this.state.movies} />
              </div>
          </div>
      </div>
  );
 
  }

//  console.log(movies)






}

export default Movielisting;