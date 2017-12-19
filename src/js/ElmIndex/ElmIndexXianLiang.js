import React,{Component} from 'react';
import store from '../store.js';


class IndexXiangLiang extends Component{
	constructor(){
		super()
		
	}
	
	goPage(){
		store.dispatch({
			type:'listPage'
		})
		
	}

	render(){
		return (
			<div className="indexXianLiang">
				<div className="iXL_one">
					<div className="iXLo_left">
						<h1 className="iXLol_one">限量抢购</h1>
						<div className="iXLol_two">超值美味9.9元起</div>
						<div className="iXLol_three">
							<span className="iXLolt_renshu">199人</span>
							<span>正在抢</span>
							<span className="iconfont icon-jiantou"></span>
						</div>
						<div className="iXLol_img"><img src={require("../../img/headerImg3.jpg")} /></div>
					</div>
					
					<div className="iXLo_right">
						<h1 className="iXLor_one">热爱套餐</h1>
						<div className="iXLor_two">销量最高,好评最多</div>
						<div className="iXLor_three">
							<span className="iXLort_renshu">TOP</span>
							<span>100</span>
							<span className="iconfont icon-jiantou"></span>
						</div>
						<div className="iXLor_img"><img src={require("../../img/headerImg2.jpg")} /></div>
					</div>
				</div>
				<div className="iXL_two">
					<div className="iXLt_tejia">
						<h1>天天特价</h1>
						<div>低至1折</div>
						<img src={require("../../img/headerImg2.jpg")} />
					</div>
					<div className="iXLt_chihuo">
						<h1>吃货狂欢</h1>
						<div>随叫随到</div>
						<img src={require("../../img/headerImg2.jpg")} />
					</div>
					<div className="iXLt_pinzhi">
						<h1>品质优越</h1>
						<div>尖货来袭</div>
						<img src={require("../../img/headerImg2.jpg")} />
					</div>
				</div>
			</div>
		)
	}
}


export default IndexXiangLiang;