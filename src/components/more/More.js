import React,{Component} from 'react';
import style from './css/more.css';
import m1 from './images/m1.jpg'
import m2 from './images/m2.jpg'
import m3 from './images/m3.jpg'

const More = function(){
    return(
        <div className="tb_box">
			<h2 className="tab_tit">
				<a className="more" href="http://m.legendshop.cn/m_search/list?categoryId=36">更多</a>
				礼品箱包</h2>			
            <div className="tb_type tb_type_even clearfix">
                <a className="tb_floor" href="views.html">
                    <img src={m1}/>
                </a>
                <a className="th_link" href="views.html">
                    <img className="tb_pic" src={m2}/>
                </a>
                <a className="th_link tb_last" href="views.html">
                    <img className="tb_pic" src={m3}/>
                </a>
            </div>
		</div>
    )
}
export default More;