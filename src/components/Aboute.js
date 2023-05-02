import React, { Component } from 'react';
import styles from './aboute.module.css';
import poster_aboute from "../picture/poster_logo.png"
//import-icons
import html from "../picture/iconSvg/HTML.svg"
import css from "../picture/iconSvg/css.svg"
import js from "../picture/iconSvg/js.svg"
import ReactIco from "../picture/iconSvg/react.svg"
import code from "../picture/iconSvg/code.svg"
class Aboute extends Component {
    constructor(){
        super();
        this.iCons=[{
            id:1,
            icon:code
        },{
            id:2,
            icon:html 
        },{
            id:3,
            icon:css
        },{
            id:4,
            icon:js
        },{
            id:5,
            icon:ReactIco
        }
    ]
    }
    render() {
        return (
            <div className={styles.conteiner}>
        <div className={styles.backgroundJpg}>
            <h1>JVD<span>NRZ</span></h1>
            <img src="https://anonsharing.com/cache/plugins/filepreviewer/14358/fe2096fd5585c21eff429fd053cbbb90f2d18d42393d605482b038bf414a26d9/290x290_cropped.jpg" alt='poster'/>
        </div>
        <div className={styles.paragraf}>
            <p>
Hi,I am glad that you are here and reading this text<br/>
I am <span>Javad Nowrozi Shad</span> from Shiraz, Iran<br/>
Im 20 years old and I studied material engineering and metallurgy at Yasouj University in Kohgiluyeh province and Boyer Ahmed.
Im very interested in programming and I started my work seriously when I was nineteen years old.<br/>
Im well versed in html, css, js and the js framework reactjs.
My goal is to work in the field of programming.
And in the future, I want to get a degree in computer engineering from a prestigious university in Iran.<br/>
I am very happy that you visited the my first React site and project.<br/><br/>
- People with a goal always fight for their goal.

            </p>
        </div>
        <div className={styles.icons}>
            {this.iCons.map((i)=><img key={i.id} src={i.icon} alt="icon"/>)}
        </div>
            </div>
        );
    }
}

export default Aboute;
