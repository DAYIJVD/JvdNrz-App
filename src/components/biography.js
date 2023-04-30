import React, { Component } from 'react';
import Styles from "./biography.module.css";
import ax_1 from "../picture/1.png";
import ax_2 from "../picture/2.png";
import ax_3 from "../picture/3.png";
import NrzJvd from "../picture/nrzjvd.gif";

class Biography extends Component {
    abouteclick=()=>{
        this.props.history.push("/biography/aboute")
    }
    render() {
        return (
            <div className={Styles.conteiner}>
               
                <div className={Styles.me}>
            <img src={NrzJvd} onClick={this.abouteclick} alt="bio_pic"/>
            </div>  
            <div className={Styles.Main}>
            <img src={ax_1} alt="bio_pic"/>
          <img src={ax_2} alt="bio_pic"/>
           <img src={ax_3} alt="bio_pic"/>
          
                </div>
           
               
                  
            </div>
        );
    }
}

export default Biography;
