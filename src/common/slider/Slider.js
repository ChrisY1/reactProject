import React,{Component} from 'react';
import './css/slider.css'
import TouchSlide from '../../assets/js/TouchSlide.js'
import i1 from './images/i1.jpg'
import i2 from './images/i2.jpg'
import i3 from './images/i3.jpg'
// const Slider = function(){
//     return(
//         <div className="container">
// 		    <div className="row">
//                 <div id="slide">
//                     <div className="hd">
//                         <ul>
//                             <li className="on">1</li>
//                             <li className="on">2</li>
//                             <li className="on">3</li>
//                         </ul>
//                     </div>
//                     <div className="bd">
//                         <div className="tempWrap">
//                             <ul>
//                                 <li>
//                                     <a href="http://m.legendshop.cn/m_search/list?categoryId=36" target="_blank">
//                                         <img src={i1} alt="女包" ppsrc="./images/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg"/>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="http://m.legendshop.cn/m_search/list?categoryId=38" target="_blank">
//                                         <img src={i2} alt="女鞋" ppsrc="./images/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg"/>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="http://m.legendshop.cn/m_search/list?categoryId=38" target="_blank">
//                                         <img src={i3} alt="服装" ppsrc="./images/efa1dc7b-1375-4876-acae-e344cae7d55c.jpg"/>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

class Slider extends Component{
    constructor(){
        super();
        // console.log(TouchSlide)
    }
    render(){
        return(
                <div className="container">
                <div className="row">
                    <div id="slide">
                        <div className="hd">
                            <ul>
                                <li className="on">1</li>
                                <li className="on">2</li>
                                <li className="on">3</li>
                            </ul>
                        </div>
                        <div className="bd">
                            <div className="tempWrap">
                                <ul>
                                    <li>
                                        <a href="http://m.legendshop.cn/m_search/list?categoryId=36" target="_blank">
                                            <img src={i1} alt="女包" ppsrc="./images/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://m.legendshop.cn/m_search/list?categoryId=38" target="_blank">
                                            <img src={i2} alt="女鞋" ppsrc="./images/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://m.legendshop.cn/m_search/list?categoryId=38" target="_blank">
                                            <img src={i3} alt="服装" ppsrc="./images/efa1dc7b-1375-4876-acae-e344cae7d55c.jpg"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    componentDidMount(){
        TouchSlide({
            slideCell:"#slide",
            titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell:".bd ul",
            effect:"left",
            autoPlay:true,//自动播放
            autoPage:true, //自动分页
            switchLoad:"_src" //切换加载，真实图片路径为"_src"
        });
    }
    
}


export default Slider;