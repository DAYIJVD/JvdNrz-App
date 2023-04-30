import React, { Component } from 'react';
import Movie from './movie';
import Music from './music';
class Entertainment extends Component {
    constructor(){
        super();
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
        this.music=[
            {
                id:1,
                title:"The-AB7",
                name:"GTA",
                poster:"https://i1.sndcdn.com/artworks-zNMOLtAABQUsR253-syMUBw-t500x500.jpg"
            },
            {
                id:2,
                title:"P6rhum",
                name:"Maria",
                poster:"https://i1.sndcdn.com/artworks-SZ6WXOUXkw8Dtd7k-QT1lbQ-t500x500.jpg"
            },
            {
                id:3,
                title:"DIXR",
                name:"SHAYATEEN",
                poster:"https://i1.sndcdn.com/artworks-xzac5Alaw31tGyFL-cyhgqA-t500x500.jpg"
            },
            {
                id:4,
                title:"HipHopologist",
                name:"Capsule Albume",
                poster:"https://i1.sndcdn.com/artworks-IyXJUUiehrG7Eljy-jjqIDw-t500x500.jpg"
            },
            {
                id:5,
                title:"GodPoori",
                name:"SHOOTIA",
                poster:"https://i1.sndcdn.com/artworks-2Fqdz2rt0TzkAwKl-iEnVQw-t500x500.jpg"
            },
            {
                id:6,
                title:"The-AB7",
                name:"Khialet Takht",
                poster:"https://i1.sndcdn.com/artworks-2ZJztjBwXHuoYBVz-N2y19A-t500x500.jpg"
            },
            {
                id:7,
                title:"CnJim",
                name:"RUNAWAY (Remix)",
                poster:"https://i1.sndcdn.com/artworks-08hw2WMyW3zXtFfH-dgeFTw-t500x500.jpg"
            }
        ]

    }
    render() {
        return (
            <div style={{backgroundColor:"black",color:"white" ,padding:"1.2rem"}}>
                <h2 style={{color:"black",backgroundColor:"rgb(54, 252, 209)",borderRadius:"20px",display:"inline",padding:"0.5rem",cursor:"pointer"}}>Movie</h2>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"1rem 0"}}>
                {this.movies.map((i)=><Movie key={i.id}  data={i} />)}
                </div>
                <h2 style={{color:"black",backgroundColor:"rgb(54, 252, 209)",borderRadius:"20px",display:"inline",padding:"0.5rem",cursor:"pointer"}}>Music</h2>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"1rem 0"}}>
                 {this.music.map((i)=><Music key={i.id}  data={i}/>)}
                </div>
            </div>
        );
    }
}

export default Entertainment;
