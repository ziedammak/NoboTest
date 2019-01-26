import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css'
import {Link} from 'react-router-dom';
import { Progress } from 'reactstrap';
var divStyle = {
   width : 250
  };

    const MovieCard = (props) => {
        const checkRating = () => {
            let rating = props.movie.vote_average * 10;
            let clsName = "";
        
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
       
       
       
       
        return(

            
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={props.movie.show.image? props.movie.show.image.medium :"http://static.tvmaze.com/uploads/images/medium_portrait/6/16798.jpg"} alt="" top width="100%"/>

            <div className="card-body">
                <h7 className="card-title">{props.movie.show.name}</h7>
                <h6 className="card-subtitle mb-2 text-muted">{props.movie.genres}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.genres}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                <div className="float-left mt-1">
                         {/* The Rate is <b>{props.movie.show.rating.average? ' ':'not available'}</b>  {props.movie.show.rating.average}          */}
                         <div>
                         <Progress color={checkRating()}   style={divStyle} value={props.movie.show.rating.average * 10}>{props.movie.show.rating.average * 10}%</Progress>
                          </div>  
                         
                         {/* <input type="button"  value="Details"/> */}

                </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div>
                </div>
            </div>
            <Link className="btn btn-primary btn-block"
        to={`/movie/${props.movie.show.id}`}>Details</Link>
        </div>
    </div>  



 

        )

    }

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;