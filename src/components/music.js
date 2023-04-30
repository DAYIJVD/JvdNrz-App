import React, { Component } from 'react';
import styles from "./music.module.css";
import { Link } from 'react-router-dom';
class Music extends Component {
    
    render(){
        const {poster,title,name,id}=this.props.data;
        return (
            <div className={styles.conteiner}>
               <Link to={`/Entertainment/playmusic/${id}`}><img src={poster} alt="music_poster" /></Link> 
            <h2>{title}-{name}</h2>
            </div>
        );
    }
}

export default Music;
