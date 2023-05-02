import React,{ useEffect, useState} from 'react';
import styles from "./musicPLY.module.css"
import play from "./pic/bx-play.svg" 
import pause from "./pic/bx-pause.svg" 
import { Link } from 'react-router-dom';
 
const data=[
    {
        id:1,
        title:"The-AB7",
        name:"GTA",
        src:"https://audio.jukehost.co.uk/1c7ugp5xXg6bK7w9poNebKDmI2dH6dSs",
        poster:"https://i1.sndcdn.com/artworks-zNMOLtAABQUsR253-syMUBw-t500x500.jpg"
    },
    {
        id:2,
        title:"P6rhum",
        name:"Maria",
        src:"https://audio.jukehost.co.uk/ECDPzROS9Cy3e6OEDbMGRxr5DyEuD9vp",
        poster:"https://i1.sndcdn.com/artworks-SZ6WXOUXkw8Dtd7k-QT1lbQ-t500x500.jpg"
    },
    {
        id:3,
        title:"DIXR",
        name:"SHAYATEEN",
        src:"https://audio.jukehost.co.uk/cPblvX4MjlpbAEBynbvukGEsTiOJTpPL",
        poster:"https://i1.sndcdn.com/artworks-xzac5Alaw31tGyFL-cyhgqA-t500x500.jpg"
    },
    {
        id:4,
        title:"HipHopologist",
        name:"Capsule Albume (Misoozam)",
        src:"https://audio.jukehost.co.uk/fkFAw8xLBbwHNCw3w1tQpMD1sbQdLxJK",
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
        src:"https://audio.jukehost.co.uk/QyruCGd1DeQYTAMsrNqlkHxc9eqcg7Qo",
        poster:"https://i1.sndcdn.com/artworks-2ZJztjBwXHuoYBVz-N2y19A-t500x500.jpg"
    },
    {
        id:7,
        title:"CnJim",
        name:"RUNAWAY (Remix)",
        src:"https://audio.jukehost.co.uk/dcA9NKfiMnaRfK3mZAqrswmkuwOnuLGZ",
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
 Music[0].loop=true
   const playAudio=()=>{
     Music[0].play()
    }
  playAudio()
 },[Music,Data,id,itemPlay])
 const playAudio=async()=>{
 await Music[0].play()
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
        {Data.map((e)=><div key={e.id} className={styles.music}>
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