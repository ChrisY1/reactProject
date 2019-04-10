import React,{Component} from 'react';
import './css/header.css'
// const Header = function(){
//     return(
//         <header className="header">
//             <div className="fix_nav">
//                 <div className="fix_nav_box">
//                     <form action="/m_search/list" method="get" id="searchform" name="searchform">
//                         <div className="navbar-search left-search">
//                                 <input type="text" id="keyword" name="keyword" defaultValue="" placeholder="搜索商品" className="form-control"/>
//                         </div>
//                         <div className="nav-right">
//                             <input type="button" defaultValue="搜索" onClick="this.searchproduct.bind(this);" className="img-responsive"/>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </header>
//     )
    
// }
class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="fix_nav">
                    <div className="fix_nav_box">
                        <form action="/m_search/list" method="get" id="searchform" name="searchform">
                            <div className="navbar-search left-search">
                                    <input type="text" id="keyword" name="keyword" defaultValue="" placeholder="搜索商品" className="form-control"/>
                            </div>
                            <div className="nav-right">
                                <input type="button" defaultValue="搜索" onClick={this.searchproduct.bind(this)} className="img-responsive"/>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        )
    };
    searchproduct(){
            
    }
}
    
export default Header;