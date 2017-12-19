import React,{Component} from 'react';
import store from '../store.js';

class ListPaiXu extends Component{
	constructor(){
		super();
	}
	xiaoliang(){
		console.log('dd');
	}
	render(){
		return(
			<div className="listPaixu">
				<div className="zonghe" onClick={this.props.actionTwo}><span className="iconfont icon-order"></span>
				<span style={{color:'black',fontSize:'30px'}}>综合好评</span></div>
				<div className="xiaoliang" onClick={this.props.paixuTwo}><span className="iconfont icon-huo"></span>
				<span style={{color:'black',fontSize:'30px'}}>销量最高</span></div>
				<div className="zuidi"><span className="iconfont icon-qian1"></span>
				<span style={{color:'black',fontSize:'30px'}}>起送价最低</span></div>
				<div className="zuikuai"><span className="iconfont icon-shijian1"></span>
				<span style={{color:'black',fontSize:'30px'}}>配送最快</span></div>
			</div>
		)
	}
}
export default  ListPaiXu;