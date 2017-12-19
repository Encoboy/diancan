import React,{Component} from 'react';
import store from '../store.js';
import data from '../data.js';
import ListPage from '../ListPage.js';
import $ from 'jquery';


class ShopPageTop extends Component{
	constructor(){
		super()
		this.goPage = this.goPage.bind(this)
		this.state = {
			// store.getState().shopNum 是在store.js中得到的新状态，getState() store的方法
			// getState()返回应用当前的 state 树。它与 store 的最后一个 reducer 返回值相同;
			showObj:data.listPage.meishi[store.getState().shopNum],
			
		};

		var that = this;
		$.ajax({
			// 前端用ajax去到http：//localhost:8888/elm,这个路径去后台拿数据。
			url:'http://localhost:8888/elm',
			// 从后台的elm.js拿到的数据放在了res中，所以res中有数据库中的数据。
			// complete是ajax完成后执行的函数，complete不管你成不成功都执行。
			complete:function(res){
				console.log(res);
				// 通过在控制台可以知道想要的数据是在res这个对象数组下的responseJSON中
				// 然后将这个res.responseJSON赋值给that.state.arr中
				// react.js 的存储是放在state中。
				that.state.arr = res.responseJSON;
				that.state.shopname = that.state.arr[store.getState().shopNum-1].shopname;
				that.state.shopimg = that.state.arr[store.getState().shopNum-1].shopimg;
				that.forceUpdate();
				console.log(that);
			}
		});
		
	}
	goPage(){
		// dispath()/dispatch(action)。改变state的唯一方法是store.dispatch的一个action
		// Store不是类，而只是一个有几个方法的对象，可以采用createStore进行创建
		store.dispatch({
			type:'listPage'
		})
	}
	goPageCur(){
		store.dispatch({
			type:'shopCur'
		})
	}
	render(){
		return (
			<div className='shopPageTop'>
				<h1 className='shopPageTopNav'>
					<span className ='iconfont icon-navbankicon' onClick={this.goPage}></span>
					<span  className='iconfont icon-iconfontgouwuchekong' onClick={this.goPageCur}></span>
				</h1>
				<div className='shopPageTopMain'>
				<img className='sptm_img' src={this.state.shopimg} />
				<div className="sptm_name">
					<div className="sptmn_name">{this.state.shopname}</div>
					<div className="sptmn_peisong">
						<span>蜂鸟专送</span>
						<span>/</span>
						<span>29分钟送达</span>
						<span>/</span>
						<span>配送费￥5</span>
					</div>
					<div className="sptmn_gonggao">公告:特价大闸蟹30元3只</div>
				</div>
				</div>
				<div className="shopPageTop_footer">
					<div className="sptf_left">满40减18，满80减40</div>
					<div className="sptf_right">6个活动</div>
				</div>
			
			</div>
		)
	}
}


export default ShopPageTop;
