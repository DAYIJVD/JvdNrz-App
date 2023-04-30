import React, { Component } from 'react';
import styles from "./footer.module.css"
import logo from "../picture/logo.png";
class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}> 
                <img src={logo} alt="logo"/>   
                <h3>{"JVDNRZ <  > TheDN"}</h3>           
            </div>
        );
    }
}

export default Footer;
