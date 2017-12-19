import React,{Component} from 'react';
import store from '../store.js';
import data from '../data.js';
import $ from 'jquery';


class IndexMain extends Component{
	constructor(){
		super();
		
		this.state = {
			arr:[{
				shopname:'qq'
			}]
		};
		// this.state.shopArr = data.listPage.meishi;
		// console.log(this.state.shopArr);

		var that = this;
		$.ajax({
			url:'http://localhost:8888/elm',
			complete:function(res){
				console.log(res);
				that.state.arr = res.responseJSON;
				that.forceUpdate();
				console.log(that);
			}
		});
		
	}
	
	
	goPage(e){
		store.dispatch({
			type:'shopPage',
			numId:e.target.dataset.num 
		})
	}
	


	render(){
		console.log(this.state.arr);
		return (<div>
					<h1 className="indexmain">
						<div className="geli"></div>
						<span>推荐商家</span>
					</h1>
					<div className="indexMainshop">

						{
							this.state.arr.map(function(item,index,arr){
								return (
								<div key={index}  className="Ms_shop">
									<div data-num={item.id} onClick={this.goPage}></div>
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
													<div>4.7</div>
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
					</div>
					
				</div>)	
	}
}



export default IndexMain;