import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavButton extends Component {
    constructor(){
        super()
        this.state={
            bo:false
        }
    }
    clicked=()=>{
        this.setState(e=>{
            return{bo:!e.bo}
        })
    }
    render() {
        return (
            <>
                <li onClick={this.clicked}><Link to={this.props.url} className={this.state.bo?"active":""}>{this.props.title}</Link></li>
            </>
        );
    }
}

export default NavButton;
