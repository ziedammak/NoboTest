import React, {Component} from 'react';
import { Progress } from 'reactstrap';






import './DetailsComponent.css';
const API = 'https://api.tvmaze.com/search/shows?q=robin%20hood';


class DetailsComponent extends Component {



  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: []
    };
  }

  componentDidMount() {
    fetch(API )
      .then(response => response.json())
      .then(data => this.setState({ movies: data }));
  }





  checkRating = () => {
    const movieFile = this.state.movie;
    let rating = movieFile.show.rating.average * 10;
    let clsName="";
    if(rating < 20) {
      return clsName = "danger";
    } else if(rating < 60) {
      return clsName ="warning";
    } else if(rating < 80) {
      return clsName ="info";
    } else {
      return clsName ="success";
    }
  }


  render() {
    let movie = this.state.movies.map((movie)=>{
        if(movie.show.id == this.props.match.params.id){
            var img
            if(movie.show.image!== null){
                img=movie.show.image.medium;
              //  document.write(movie.show.id);
            }
            this.state.movie=movie
            return(

                <div className="detail-wrapper">

        <div style={{backgroundImage: `url(https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXyMvZlorgAhUGbFAKHWNeB78QjRx6BAgBEAU&url=https%3A%2F%2Ffr.depositphotos.com%2F37841605%2Fstock-photo-old-blank-film-strip-frame.html&psig=AOvVaw3ZOYvkmFL-AnUhx_xKkx2B&ust=1548548442303169`}}
                     className="poster">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <h1 className="poster__header">{movie.show.name}</h1>
                        <h2 className="txt-color poster__tagline">{ movie.show.language}</h2>
                        <p className="txt-color">Genres: <span className="badge badge-success">{ movie.show.genres }</span></p>
                        <p className="txt-color poster__overview"><span className="font-weight-bold">Overview:</span> <br/> { movie.show.summary.substring(3, movie.show.summary.length-4)}</p>
                      </div>
                    <div className="col-12 col-md-6 poster__image-wrap">
                        <img className="poster__image"  src={movie.show.image? movie.show.image.medium :"http://static.tvmaze.com/uploads/images/medium_portrait/6/16798.jpg"} alt="{ movieFile.original_title }" />
                    </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <br />
                      <h3 className="text-center">Movie Rating</h3>
                       <Progress color={this.checkRating()} value={movie.show.rating.average * 10}>{movie.show.rating.average * 10}%</Progress> 
                       <br />

                    </div>
                  </div>
                </div>
        
         
        
              </div>              
            );
        }
    });

    return (
        <div>
            {movie}

        </div>
    );
    
}


/*   render() {
    document.write("hiiii");


    
    //const movieFile = this.state.movie;
    const movieId = this.props.match.params.id;
var movieFile 
    let movie = this.state.movies.map((message)=>{
        if(message.show.id === this.props.match.params.id){
            document.write("ggggg")
            document.write(JSON.stringify(message.show.id))
            return message}})
movieFile=this.state.movies["0"];
var x= "11" ;
this.state.movie= movieFile; 
document.write(JSON.stringify(this.state.movie));
var a= JSON.stringify(this.state.movie) ; 




        
    return (
        
      <div className="detail-wrapper">

        <div style={{backgroundImage: `url(data:image/jpeg;base64,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)`}}
             className="poster">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                  {/* <h1 className="poster__header">{this.movie.show.name}</h1>   */
            /*      <h2 className="txt-color poster__tagline">{ movieFile.tagline }</h2>
                <p className="txt-color">Relese Date: <span className="badge badge-success">{ movieFile.release_date }</span></p>
                <p className="txt-color poster__overview"><span className="font-weight-bold">Overview:</span> <br/> { movieFile.overview }</p>
                <a className="txt-color" href={ movieFile.homepage } target="_blank">Visit movie page</a> 
              </div>
          <div className="col-12 col-md-6 poster__image-wrap">
                <img className="poster__image" src={`https://image.tmdb.org/t/p/w500/${movieFile.poster_path}`} alt="{ movieFile.original_title }" />
            </div> 
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <h3 className="text-center">Movie Rating</h3> */
              /* <Progress color={this.checkRating()} value={movieFile.vote_average * 10}>{movieFile.vote_average * 10}%</Progress> */
     /*        </div>
          </div>
        </div>



      </div> */


    }
export default DetailsComponent;
