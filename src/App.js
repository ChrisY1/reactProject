import React, { Component } from 'react';
import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import Home from './components/home/Home'
import Slider from './common/slider/Slider'
import Detail from './components/detail/Detail'

import './assets/css/bootstrap.css'
import './assets/css/base.css'
// import './css/bootstrap.css'
// import './css/order3.css'
// import './css/productDetail.css'
// import './css/style.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Detail></Detail>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
