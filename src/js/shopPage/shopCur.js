import React,{Component} from 'react';
import store from '../store.js';
import data from '../data.js';

import Goods from './Goods.js';

class ShopCur extends Component{
	constructor(){
		super();
	
	}
	
	goPage(){
		console.log(store.getState());
		store.dispatch({
			type:'listPage'
		})
	}
	
	render(){
		
		var arr = data.listPage.meishi[0].showPage.goods.goodsArr;
		
		var newArr = [];
	
		for(let i=0;i<arr.length;i++){
			for(let j=0;j<arr[i].length;j++){
				if(arr[i][j].chooseNum>0){
					
					newArr.push(arr[i][j]);
					
				}
			}
		}
		
		this.state ={
			buyCarArr:newArr,
		}
		console.log(this.state.buyCarArr);
		return (<div>
			<div className="shopCur">
			 	
			 		<div className="sc_header">
			 			<span className="iconfont icon-jiantouarrowhead7" onClick={this.goPage}></span>
			 			<h1>购物车</h1>
			 		</div>
			</div>
			
			
						<div className="sl_shop">
								<div className="sls_right">
									<div className="sls_name">饭戒 ( 京溪店 ) </div>
									<span className="iconfont icon-jiantou"></span>
								</div>
								<div className="sls_shanchu">
									<span className="iconfont icon-shanchu"></span>
								</div>
							</div>

		{
			
			this.state.buyCarArr.length?this.state.buyCarArr.map(function(item,index,arr){
				
				
				return <div key={index} data-num={index} className="shoplist">
							
							<div className="sl_cai">
								<div className="slc_img"><img src={item.goodsImg} /></div>
								<div className="shoplist_xinxi">
									<div className="slx_header">
										<h5>{item.name}</h5>
										<span> × </span>
									</div>
									<div className="slx_footer">
										<div className="slxf_num">×{item.chooseNum}</div>
										<div className="slxf_price">￥{item.goodsPrice}</div>
									</div>
								</div>
							</div>
							
						</div>
				
			},this):null
		}
			<div className="sl_canhe">
								<div>餐盒</div>
								<div className="slc_price">￥2</div>
							</div>
							<div className="sl_tehui">
								<div className="slt_fan">
									<span>【饭戒美食节】</span>
									<span>3.5折巨惠单人餐</span>
								</div>
								<div className="slt_price"> - ￥29.64</div>
							</div>
							<div className="sl_jiesuan">
								<div className="sljr_price">优惠<span>29.64</span>元</div>
								<div className="slj_jiesuan">
									<div className="sljl_price">合计<span>￥17.96</span></div>
									<div className="sljj_suan">去结算</div>
								</div>
							</div>
			
			
			
			
		</div>
			
			
		)
		
	}


}



	
	

export default ShopCur;