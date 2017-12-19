import React,{Component} from 'react';
import store from '../store.js';


class IndexTehui extends Component{
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
			<div className="indexTeHui">
				<div className="iTH_one">
					<div className="iTHo_meishi" onClick={this.goPage}>
						<div className="iTHom_img"><img src={require("../../img/headerImg2.jpg")} /></div>
						<span>美食</span>
					</div>
					<div className="iTHo_tianpin">
						<div className="iTHom_img"><img src={require("../../img/headerImg3.jpg")} /></div>
						<span>甜品饮品</span>
					</div>
					<div className="iTHo_bianli">
						<div className="iTHom_img"><img src={require("../../img/headerImg2.jpg")} /></div>
						<span>商超便利</span>
					</div>
					<div className="iTHo_zaocan">
						<div className="iTHom_img"><img src={require("../../img/headerImg3.jpg")} /></div>
						<span>预定早餐</span>
					</div>
				</div>
				<div className="iTH_two">
					<div className="iTHt_shuiguo">
						<div className="iTHom_img"><img src={require("../../img/headerImg2.jpg")} /></div>
						<span>果蔬生鲜</span>
					</div>
					<div className="iTHt_xindian">
						<div className="iTHom_img"><img src={require("../../img/headerImg3.jpg")} /></div>
						<span>新店特惠</span>
					</div>
					<div className="iTHt_pinpai">
						<div className="iTHom_img"><img src={require("../../img/headerImg2.jpg")} /></div>
						<span>品牌专区</span>
					</div>
					<div className="iTHt_yexiao">
						<div className="iTHom_img"><img src={require("../../img/headerImg3.jpg")} /></div>
						<span>夜宵</span>
					</div>
				</div>
				<div className="iTH_three">
					<div className="iTHthree_left"></div>
					<div className="iTHthree_right"></div>
				</div>
			</div>
		)
	}
}


export default IndexTehui;