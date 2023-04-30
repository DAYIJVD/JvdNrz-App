import React, { Component } from 'react';
import styles from "./header.module.css";
import HelloWorld from "../picture/HelloWorld.JPG";
class Header extends Component {
    render() {
        return (
            <div className={styles.img_hello} >  
            <img src={HelloWorld} alt="HelloWorld"/> 
            </div>
        );
}
}

export default Header;