import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const getMovies = (movies) => {
    return (
        <div className="card-deck">
            {
                movies.map(movie => <MovieCard key={movie.show.id} movie={movie} />)
            }
        </div>
    );
};

const MovieList = (props) => (
    <div>
        {getMovies(props.movies)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;