import React,{Component} from 'react';
import styleFooter from './css/detail.css'

const Detail = function(){
    return(
        <div className="row gary-bg">
            <div className="white-bg p10 details_con">
                <h1 className="item-name" id="prodName">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</h1>
                <ul>
                    <li>
                        <label>商城价格：</label>
                        <span className="price">¥<span className="price" id="prodCash">179.00</span></span>
                    </li>
                    <li id="choose_0" index="0" >
                        <label id="propName" propname="颜色">颜色：</label>
                            <dl>
                                <dd key="208:635" valId="635" >黑色<span></span></dd>
                                <dd className="check" key="208:636" valId="636" >红色<span></span></dd>
                                <dd key="208:661" valId="661" >黄色<span></span></dd>
                            </dl>
                    </li>
                    <li>
                        <label>数量：</label>
                            <div className="count_div">
                                <a href="javascript:void(0);" className="minus" ></a>
                                <input type="text" className="count" value="1" id="prodCount" readonly="readonly"/>
                                <a href="javascript:void(0);" className="add" ></a>
                            </div>
                    </li>
                </ul>
            </div>
        </div>       
    )
}
export default Detail;