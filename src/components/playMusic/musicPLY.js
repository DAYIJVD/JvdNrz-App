import React,{ useEffect, useState} from 'react';
import misozam from "./masozam.mp3";
import GTA from "./GTA.mp3";
import RUNAWAY from "./RUNAWAY.mp3";
import KHIYALET from "./KHIYALET.mp3"
import Maria from "./Maria.mp3";
import SHAYATEEN from "./SHAYATEEN.mp3";
import styles from "./musicPLY.module.css"
import play from "./pic/bx-play.svg" 
import pause from "./pic/bx-pause.svg" 
import { Link } from 'react-router-dom';
 
const data=[
    {
        id:1,
        title:"The-AB7",
        name:"GTA",
        src:GTA,
        poster:"https://i1.sndcdn.com/artworks-zNMOLtAABQUsR253-syMUBw-t500x500.jpg"
    },
    {
        id:2,
        title:"P6rhum",
        name:"Maria",
        src:Maria,
        poster:"https://i1.sndcdn.com/artworks-SZ6WXOUXkw8Dtd7k-QT1lbQ-t500x500.jpg"
    },
    {
        id:3,
        title:"DIXR",
        name:"SHAYATEEN",
        src:SHAYATEEN,
        poster:"https://i1.sndcdn.com/artworks-xzac5Alaw31tGyFL-cyhgqA-t500x500.jpg"
    },
    {
        id:4,
        title:"HipHopologist",
        name:"Capsule Albume (Misoozam)",
        src:misozam,
        poster:"https://i1.sndcdn.com/artworks-IyXJUUiehrG7Eljy-jjqIDw-t500x500.jpg"
    },
    {
        id:5,
        title:"GodPoori",
        name:"SHOOTIA",
        src:"https://ups.music-fa.com/tagdl/8e401/Godpoori%20-%20Shotia%20(320).mp3",
        poster:"https://i1.sndcdn.com/artworks-2Fqdz2rt0TzkAwKl-iEnVQw-t500x500.jpg"
    },
    {
        id:6,
        title:"The-AB7",
        name:"Khialet Takht",
        src:KHIYALET,
        poster:"https://i1.sndcdn.com/artworks-2ZJztjBwXHuoYBVz-N2y19A-t500x500.jpg"
    },
    {
        id:7,
        title:"CnJim",
        name:"RUNAWAY (Remix)",
        src:RUNAWAY,
        poster:"https://i1.sndcdn.com/artworks-08hw2WMyW3zXtFfH-dgeFTw-t500x500.jpg"
    }
]



const MusicPLY = (props) => {
 let Music=document.getElementsByTagName("audio");
 const [Data]=useState(data);
 const [playing,setplaying]=useState(false)
 const id=props.match.params.id
 const itemPlay =Data[id-1]
 const srcItem=itemPlay.src
 useEffect(()=>{ 
    setplaying(false)
   console.log(Music[0].loop=true)
   Music[0].play()
 },[Music,Data,id,itemPlay])
 const playAudio=()=>{
  Music[0].play()
 }
 const playpause=()=>{
    Music[0].pause()
 }
const changeplay=()=>{
    if(playing===true){
setplaying(!playing)
playAudio()
    }
    if(playing===false){
        setplaying(!playing)
        playpause()
    }
}
return(<div className={styles.conteiner}>

    <div className={styles.play}  >

<audio src={srcItem} />
               <img alt="my-music" src={itemPlay.poster}/>
               <div >
                  <img alt="icon" onClick={changeplay}  src={playing?play:pause}  />
</div>
</div>
<div>   
        <div className={styles.conteinerList}>
        {Data.map((e)=><div className={styles.music}>
        <Link to={`/Entertainment/playmusic/${e.id}`}><img alt='poster' src={e.poster}/></Link>
    <div className={styles.text}>
    <Link to={`/Entertainment/playmusic/${e.id}`}><h3>{e.title}</h3></Link>
<h5>{e.name}</h5>
    </div>
</div>)}
        </div>
        </div>
</div>
)
}

export default MusicPLY;