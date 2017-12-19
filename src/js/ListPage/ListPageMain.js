import React,{Component} from 'react';
import store from '../store.js';

import ListFenlei from './ListFenLei.js';
import ListPaiXu from './ListPaiXu.js';
import ListShaiXuan from './ListShaiXuan.js';

class ListPageMain extends Component{
	constructor(){
		super();
	
		this.state = {
			showChildTab:<ListFenlei />
		};
		this.listPage = this.listPage.bind(this);
	}
	
	listPage(e){
		
		switch(e.target.dataset.num){
			case '0' :
			this.setState({
				showChildTab:<ListFenlei />
			});
			break;
			case '1' :
			this.setState({
				showChildTab:<ListPaiXu actionTwo={this.props.action} paixuTwo={this.props.paixuing}/>
			});
			break;
			case '2':
			this.setState({
				showChildTab:<ListShaiXuan />
			});
			break;
		}
	}
	
	render(){
		return (
			<div>
				<div className = "list">
					<h1 data-num = '0' onClick={this.listPage} className="Listfenlei">分类
					<span className="iconfont icon-jiantou0101" ></span></h1>
					
					<h1 data-num = '1' onClick={this.listPage} className="Listpaixu">排序
					<span className="iconfont icon-jiantou0101" ></span></h1>
					
					<h1 data-num = '2' onClick={this.listPage} className="Listshaixuan">筛选
					<span className="iconfont icon-jiantou0101" ></span></h1>
				</div>
				<div className="ListChoose" >{this.state.showChildTab}</div>
			</div>
		)
	}
}
export default ListPageMain ;
