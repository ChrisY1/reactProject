import React,{Component} from 'react';
import style from './css/nav.css'
import n1 from './images/icon_rm.png'
import n2 from './images/icon_tm.png'
import n3 from './images/theme.png'
import n4 from './images/icon_pp.png'

const Nav = function(){
    return(
        <div className="row category">
            <a href="/m_search/list?param.hot='Y'" className="col-xs-3">
                <img className="img-responsive" src={n1}/>
                <h4>热门</h4>
            </a>
            <a href="/m_search/list?param.commend='Y'" className="col-xs-3">
                <img className="img-responsive" src={n2}/>
                <h4>精品</h4>
            </a>
            <a href="/theme/allThemes" className="col-xs-3">
                <img className="img-responsive" src={n3}/>
                <h4>专题列表</h4>
            </a>
            <a href="/brand" className="col-xs-3">
                <img className="img-responsive" src={n4}/>
                <h4>品牌</h4>
            </a>
        </div>
    )
}
export default Nav;