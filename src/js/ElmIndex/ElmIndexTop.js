import React,{Component} from 'react';
import store from '../store.js';


class IndexTop extends Component{
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
			<div className="indexTop">
				<div className="indexTop_Header">
					<div className="iTH_left">
						<span className="iconfont icon-dizhi"></span>
						<h1 className="iTHl_dizhi">定位中.....</h1>
					</div>
					<div className="iTH_right">
						<div className="iTHr_tianqi">
							<div>16C</div>
							<div>多云夜</div>
						</div>
						<div className="iTHr_img">
							<span className="iconfont icon-77"></span>
						</div>
						
					</div>
				</div>
				<div className="indexTop_sousuo">
					<span className="iconfont icon-fangdajing"></span>
					<div>搜索商家、商品名称</div>
				</div>
				<div className="indexTop_footer">
					<div>面</div>
					<div>寿司</div>
					<div>奶茶</div>
					<div>麦当劳</div>
					<div>牛排</div>
					<div>蛋糕</div>
					<div>沙拉</div>
					<div>花甲</div>
				</div>
			</div>
		)
	}
}


export default IndexTop;