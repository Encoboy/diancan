import React,{Component} from 'react';
import store from '../store.js';

class ListPageTop extends Component{
	constructor(){
		super();
	}
	
	goPage(e){
		store.dispatch({
			type:'index', 
			numId:e.target.dataset.num
		})
	}
	
	render(){
		return <div className="ListHeader">
					<span className="iconfont icon-jiantouarrowhead7" data-num='0' onClick={this.goPage}></span>
					<h1>美食</h1>
				</div>
	}
}
export default ListPageTop;