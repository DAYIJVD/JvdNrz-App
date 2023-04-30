// import
import React, { Component } from 'react';
import { Route , Switch , Redirect } from 'react-router-dom';
import  {Navbar}  from './components/Navbar';
import Footer from './components/footer';
import Home from './components/Home';
import Biography from "./components/biography";
import Entertainment from "./components/Entertainment";
import Notfound from "./components/Notfound";
import Aboute from "./components/Aboute"
import MusicPLY from './components/playMusic/musicPLY';
import MovieDes from './components/movieDes';
class App extends Component {
  render(){
    return(
        <div>
        <Navbar/>
        <Switch>
          <Route path="/Entertainment/movie/:id" component={MovieDes}/>
        <Route path="/entertainment/playmusic/:id" component={MusicPLY}/>
          <Route path="/biography/aboute" component={Aboute}/>
          <Route path="/entertainment" component={Entertainment}/>
          <Route path="/biography" component={Biography}/>
          <Route path='/notFound' component={Notfound}/>
          <Route exact path="/" component={Home} />
          <Redirect to="/notFound"/>

        </Switch>
        <Footer/>
       </div>
    )
  }        
}

export default App;



