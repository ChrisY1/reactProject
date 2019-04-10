import React,{Component} from 'react';
import style from './css/footer.css'

const Footer = function(){
    return(
        <footer className="footer">
            <div className="foot-con">
                <div className="foot-con_2">
                    <a href="index.html" className="active">
                        <i className="navIcon home"></i>
                        <span className="text">首页</span>
                    </a>
                    <a href="category.html">
                        <i className="navIcon sort"></i>
                        <span className="text">分类</span>
                    </a>
                    <a href="shopcart.html">
                        <i className="navIcon shop"></i>
                        <span className="text">购物车</span>		
                    </a>
                    <a href="userhome.html" >
                        <i className="navIcon member"></i>
                        <span className="text">我的</span>
                    </a>
                </div>
            </div>
            </footer>
    )
}
export default Footer;