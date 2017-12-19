
import React,{Component} from 'react';
import store from '../../store.js';
import $ from 'jquery';

class My extends Component{

	constructor(){
		super();
	}
	
	goWaimai(){
		store.dispatch({
			type:'index'
		})
	}

	goFaxian(){
		store.dispatch({
			type:'faxian'
		})
	}

	goDingdan(){
		store.dispatch({
			type:'dingdan'
		})
	}

	goMy(){
		store.dispatch({
			type:'my'
		})
	}

	render(){
		return (
		<div>

			<div className="shopCur">
			 	
			 		<div className="sc_header">
			 			<span className="iconfont icon-jiantouarrowhead7" onClick={this.goPage}></span>
			 			<h1>我的</h1>
			 		</div>
			</div>


			<div className="indexfooter">
				<div className="if_waimai" onClick={this.goWaimai}>
					<span className="iconfont icon-waimai" ></span>
					<div>外卖</div>
				</div>
				<div className="if_faxian" onClick={this.goFaxian}>
					<span className="iconfont icon-faxian"></span>
					<div>发现</div>
				</div>
				<div className="if_dingdan" onClick={this.goDingdan}>
					<span className="iconfont icon-nav-order"></span>
					<div>订单</div>
				</div>
				<div className="if_my" onClick={this.goMy}>
					<span className="iconfont icon-wode"></span>
					<div>我的</div>
					
				</div>
			</div>
		</div>
		)
	}
}

export default My;



