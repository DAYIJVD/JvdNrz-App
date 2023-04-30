import React, { Component } from 'react';

class MovieDes extends Component {
    constructor(){
        super()
        this.movies=[
            {
                id:1,
                title:"MadMax",
                year:"2015",
                description:" The movie Mad Max: Fury Road 2015, in the distant future, while only a dry desert is left of the earth, the rest of the human race is ready to kill each other to get the necessities of life. ",
                pooster:"https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2019/11/Mad-Max-2015-250x370.jpg.webp"
                
            },
            {
                id:2,
                title:"Batman Begins",
                year:2005,
                description:" The movie Batman Begins 2005 tells the story of Bruce Wayne, who has seen his city, Gotham, engulfed in crime all his life, and decides to become the hero that Gotham needs more than anything and...",
                pooster:"https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2022/09/Batman-Begins-2005-Poster-250x370.jpg.webp"
                
            },
            {
                id:3,
                title:"Avengers:Infinity War",
                year:"2018",
                description:" In Avengers 2018, the members of the Avengers team, as well as their allies, are protecting the planet and confronting threats that are greater than any hero can handle. ",
                pooster:"https://upload.wikimedia.org/wikipedia/fa/4/4d/Avengers_Infinity_War_poster.jpg"
                
            },
            {
                id:4,
                title:"Logan",
                year:"2017",
                description:" Logan 2017 movie, years after the end of the events of X-Men: Days of Future Past, some of the last mutants and the aging Logan, whose early healing factor is deteriorating, together with Professor Charles Xavier, protect a girl. They talk about a teenager named Laura who looks a lot like Logan and is being hunted by sinister forces...",
                pooster:"https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2017/06/Logan-2017-Poster-250x370.jpg.webp"
                
            },
            {
                id:5,
                title:"The GodFather",
                year:"1972",
                description:" The Godfather 1972 movie, Don Vito Corleone (Marlon Brando) is one of the most powerful mafia bosses who is known as Godfather because of his help to Italian immigrants in New York. ",
                pooster:"https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2021/03/The-Godfather-1972-i.jpg.webp"
                
            },{
                id:6,
                title:"Creed |||",
                year:"2023",
                description:"In Creed 3 2023, Adonis Creed (played by Michael B. Jordan), who still dominates the world of boxing, is progressing both in his professional life and in his family life.",
                pooster:"https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2023/03/Creed-III-2023-Poster-250x370.jpg.webp"
            }
        
        ]
    }
    render() {
        const id=this.props.match.params.id;
        const movie=this.movies[id-1];
        return (
            <div style={{backgroundColor:"black"}}>
                <div style={{display:"flex" , justifyContent:"start",flexWrap:"wrap"} }>
                <img src={movie.pooster} style={{width:"350px", margin:"2rem",borderRadius:"50px"}} alt='poster'/>
                <div style={{width:"690px",margin:"2rem",color:"rgb(54, 252, 209)"}}>
                    <h2 style={{fontSize:"40px",paddingBottom:"10px"}}>{movie.title}-<span>{movie.year}</span></h2>
                    <p style={{fontSize:"20px"}}>{movie.description}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieDes;
