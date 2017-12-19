import React,{Component} from 'react';
import store from '../store.js';
import Goods from './Goods.js';
import data from '../data.js'

class ShopPageBuyCar extends Component{
	constructor(){
		super();
	
		
		this.add = this.add.bind(this);
		this.dec = this.dec.bind(this);
	}
	
	dec(e){
		this.setState({
			chooseNum:this.state.buyCarArr[e.target.dataset.num].chooseNum -= 1,
		})
		
	}
	
	add(e){
		
		this.setState({
			chooseNum:this.state.buyCarArr[e.target.dataset.num].chooseNum += 1,
			goodsPrice:this.state.buyCarArr[e.target.dataset.num].goodsPrice
		})
	}
	
	goPage(){
		console.log(store.getState());
		store.dispatch({
			type:'shopCur'
		})
	}
	
	render(){
		
		var arr = data.listPage.meishi[0].showPage.goods.goodsArr;
	
		var newArr = [];
		var num = 0;
		var price = 0;
		var Allprice = 0;
	
		for(let i=0;i<arr.length;i++){
			for(let j=0;j<arr[i].length;j++){
				if(arr[i][j].chooseNum>0){
					num += arr[i][j].chooseNum;
					newArr.push(arr[i][j]);
					price = arr[i][j].chooseNum*arr[i][j].goodsPrice;
					Allprice += price;
					
				}
			}
		}
		
		this.state ={
			buyCarArr:newArr,
			num:num,
			price:price,
			Allprice:Allprice
		}
		return (<div className="shopCUR">
				<div className="has_shop">
					<div className="hs_left">
						<div className="hsl_heng"></div><span>已选商品</span>
					</div>
					<div className="hs_right">
						<span className="iconfont icon-shanchu"></span>
						清空
					</div>
				</div>
		{
			this.state.buyCarArr.length?this.state.buyCarArr.map(function(item,index,arr){
				return <div key={index} data-num={index} className="BuyCarfoods">
							<div className="bcf_name">{item.name}</div>
							<div className="bcf_right">
								<span>￥{item.chooseNum*item.goodsPrice}</span>
								<div className="bcfAdd">
									<span data-num={index}  onClick={this.dec} className="iconfont icon-jian"></span>
									<div>{item.chooseNum}</div>
									<span data-num={index}  onClick={this.add} className="iconfont icon-jia"></span>
								</div>
							</div>
						</div>
			},this):null
		}
			<div className="BuyCar" >
		   		<div className="BuyCarRight">
		   			<div className="bcr_right">
			   			<div onClick={this.props.num} className="carBuying"></div>
			   			<div className="chooseCount">{this.state.num}</div>
			   			<div className="BCright"><span  className='iconfont icon-iconfontgouwuchekong'></span></div>
		   			</div>
		   			<div className="BuyCarRightPrice">
		   				<div className="allPrice">￥{this.state.Allprice}</div>
		   				<div className="yunfei">配送费: ￥5</div>
		   			</div>
		   		</div>
		   		<div className="BuyCarLeft" onClick={this.goPage}>
		   			去结算
		   		</div>
		</div>
		</div>
			
			
		)
		
	}
}


export default ShopPageBuyCar;
