import React, { Component } from 'react';
import "./navbar.css";
import logo from "../picture/logo.png";
import styled from "styled-components";
import { Link,NavLink} from 'react-router-dom';
// import NavButton from './navButton';


//create-mydiv tag
const Mydiv=styled.div`
width: 35px;
height: 30px;
margin: 10px 10px;
position: relative;
cursor: pointer;
display: inline-block;

tarnsition:all 0.7s;
span{
    background-color: rgb(54, 252, 209) ;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    z-index:3;
  }
span:nth-child(1){
    top:0px;
    left: 0px;
    left: ${(p)=>p.status?'0px':'-100px'};
  }
span:nth-child(2){
    top:13px;
    left: 0px;
  }
span:nth-child(3){
    bottom:0px;
    left: ${(p)=>p.status?'0px':'-100px'};
  }
&:hover span:nth-child(1){
    transform: scaleX(1.3);
  }
  &:hover span:nth-child(3){
    transform: scaleX(.8);
  }
  @media (min-width:1100px) {
        display: none;
  }
  ul{
    width:100vw;
    background-color: rgb(0, 0, 0);
    list-style: none;
    position: absolute;
    left: -70px;
    z-index:0;
    bottom: ${(p)=>p.status?'165px':'-218px'};
    text-align: center;
    transition: all 0.5s;
  
}
ul li{
    padding: 25px;
}
ul li a{
    text-decoration:none;
    color:rgb(54, 252, 209);
    padding: 25px;
    padding:25px 5rem;
    transition: all 0.8s;
    z-index:1;
}
ul li a:hover{
    color:white;
}
`;
class Navbar extends Component {
    constructor(){
        super()
        this.state={
            styleMenu:true,
            listLi:[{
                id:0,
                url:"/",
                title:"Home"
            },
            {
                id:1,
                url:"/biography",
                title:"Biography"
            },{
                id:2,
                url:"/bussines",
                title:"Bussines"
            },{
                id:3,
                url:"/entertainment",
                title:"Entertainment"
            }]
        }
    }
    clickHumnurger=()=>{
        this.setState({
           styleMenu:!this.state.styleMenu
        })
    }
    render() {
        return (
        <div className="navbar">
         <Mydiv onClick={this.clickHumnurger} status={this.state.styleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/biography">Biography</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
            </ul>   
         </Mydiv>
            <ul className="list">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/biography">Biography</NavLink></li>
                <li><NavLink to="/entertainment">Entertainment</NavLink></li>
                {/* {this.state.listLi.map(i=><NavButton key={i.id} url={i.url} title={i.title}/>)} */}
            </ul>
         <img className='img_logo' src={logo} alt='Logo'/>
            </div>
        );
    }
}

export {Navbar};