import React, { Component } from 'react';
import styles from "./movie.module.css";
import { Link } from 'react-router-dom';
class Movie extends Component {
    render() {
        const movie=this.props.data
        return (
            <div className={styles.conteiner}>
              <Link to={`/Entertainment/movie/${movie.id}`}> <img src={movie.pooster} alt='movie_poster'/></Link>
                <h2>{movie.title}<span>{movie.year}</span></h2>
            </div>
        );
    }
}

export default Movie;
