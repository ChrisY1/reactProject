import React,{Component} from 'react';
// import Slider from '../slider/Slider'
import Nav from '../nav/Nav'
import More from '../more/More'
import style from './css/home.module.css'

const Home = function(){
    return(
        <div>
            
            <Nav></Nav>
            <More></More>
        </div>
    )
}
export default Home;