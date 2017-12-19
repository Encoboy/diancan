import React,{Component} from 'react';
import store from './store.js';
import data from './data.js';
import $ from 'jquery'; 

import ListPageTop from './ListPage/ListPageTop.js';
import ListPageMain from './ListPage/ListPageMain.js';


class ListPage extends Component{
	constructor(){
		super();
		
		this.state={arr : [
		{
			shopname:'大世界店',
		}]};

		
		// this.state.arr = data.listPage.meishi;
		//点击事件需要在这里绑定，bind()方法改变this指向，还有一个方法var that = this;
		

		// var that = this;
		// $.ajax({
		// 	// 前端用ajax去到http：//localhost:8888/elm,这个路径去后台拿数据。
		// 	url:'http://localhost:8888/elm',
		// 	// 从后台的elm.js拿到的数据放在了res中，所以res中有数据库中的数据。
		// 	// complete是ajax完成后执行的函数，complete不管你成不成功都执行。
		// 	complete:function(res){
		// 		console.log(res);
		// 		// 通过在控制台可以知道想要的数据是在res这个对象数组下的responseJSON中
		// 		// 然后将这个res.responseJSON赋值给that.state.arr中,(就是将得到的数据存在了store中，this.state)
		// 		// react.js 的存储是放在state中。
				
		// 		that.state.arr = res.responseJSON;
		// 		that.forceUpdate();
		// 		console.log(that);
		// 	}
		// });


		this.goodComent = this.goodComent.bind(this);
		this.saleSort = this.saleSort.bind(this);
	}
	
	
	goPage(e){
		// store执行的动作
		store.dispatch({
			type:'shopPage',
			// 这里的dataset.num等于data-num？？ 是的,
			// 这里的e.target.dataset.num 表示点到谁就可以选中谁。
			// 注：target和currentTarget的区别：target返回的表示event触发的那个事件，
			// 而currentTarget返回的是event绑定的那个事件。
			numId:e.target.dataset.num

		})
	}
	
	
	goodComent(e){
			// 数组的sort方法，当a=b,a>b,a<b时，升序，降序。
			this.state.arr.sort(function(a,b){
				return a.shopstar<b.shopstar;
			})
			this.forceUpdate();
			
			console.log(this.state);
		}

	saleSort(e){
		
			this.state.arr.sort(function(a,b){
				
				return a.shopvolumn<b.shopvolumn;
			})

			this.forceUpdate();
			
			console.log(this.state);
		}

	render(){
		console.log(this.state.arr);
		return (<div>
					<ListPageTop />
					<ListPageMain action={this.goodComent} paixuing={this.saleSort}/>
					<div className="list_tianchong"></div>
					
					{
							this.state.arr.map(function(item,index,arr){
								console.log('这是id'+item.id);
								console.log("这是index"+index);
								return (
								<div key={index}  className="Ms_shop">
									<div data-num={item.id} onClick={this.goPage} className="list_go"></div>
									<div className="Msh_header">
										<div className="Msheader_img"><img src={item.shopimg} /></div>
										<div className="Msheader_right">
											<div className="Mshr_one">
												<div className="Mshro_left">
													<div className="Mshr_pinpai">品牌</div>
													<h3 className="Mshr_name">{item.shopname}</h3>
												</div>
												<span>保 票</span>
											</div>
											<div className="Mshr_two">
												<div className="Mshr_star">
													<span className="iconfont icon-xing"></span>
													<span className="iconfont icon-xing"></span>
													<span className="iconfont icon-xing"></span>
													<span className="iconfont icon-xing"></span>
													<span className="iconfont icon-xing"></span>
													<div>{item.shopstar}</div>
													<div className="Mshr_yueshou">月售{item.shopvolumn}单</div>
												</div>
												<div className="Mshr_song">
													蜂鸟专送
												</div>
											</div>
											<div className="Mshr_three">
												<div className="Mshrt_right">
													<span>￥20元起送</span><span> | </span>
													<span>配送费</span><span>￥3.5</span>
												</div>
												<div className="Mshr_km">
													<span>3.2km</span>
													<span> | </span>
													<span>20分钟</span>
												</div>
											</div>
										</div>
									</div>
									<div className="Msh_footer">
										<div className="Mshf_one">
											<div>减</div>
											<span>满30减20,满58减26,满108减30</span>
										</div>
										<div className="Mshf_two">
											<div>首</div>
											<span>新用户下单立减17元</span>
										</div>
									</div>
								</div>)
							},this)	
						}
	
					
				</div>)	
	}
}


export default ListPage;