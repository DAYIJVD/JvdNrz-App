import React, { Component } from 'react';
import Main from './main';
import styles from "./crds.module.css";
//import picture
import bill_ from "../picture/billbord.JPG";
import my_push from "../picture/push.JPG";
import my_apil from "../picture/apill.JPG";

class Crds extends Component {
    constructor(){
        super()
        this.picture=[{id:1 , image:bill_,name:"NrzJvd"},{id:2 , image:my_push,name:"My Store"},{id:3 , image:my_apil,name:"Contact"}]
        
      }
    render() {
        return (
            <div className={styles.conteiner}>
        {this.picture.map((p)=><Main picture={p.image} key={p.id} name={p.name} />)}
            </div>
        );
    }
}

export default Crds;
