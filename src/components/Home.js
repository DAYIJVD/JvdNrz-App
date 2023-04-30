import React, { Component } from 'react';
import Header from './header';
import Crds from './crds';
import styles from "./home.module.css";
class Home extends Component {
    render() {
        return (
            <div className={styles.conteiner}>
              <Header/>
              <Crds/>          
        </div>
        );
    }
}

export default Home;
