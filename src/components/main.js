import styles from "./main.module.css"
import React, { Component } from 'react';
class Main extends Component {
    constructor(){
        super();
        this.state={
            pull:0
        }
    }
      
    
    render(){
        return (
            <div className={styles.conteiner}>
            <div className={styles.Main}>
                <img className={styles.filter_img} src={this.props.picture} alt='billboard'/>
             <h4>About</h4>
        </div>
          </div>
        );
    }
}

export default Main;
