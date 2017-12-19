
import React,{Component} from 'react';
import store from '../store.js';
import data from '../data.js';
import $ from 'jquery';

class Goods extends Component{
	constructor(){
		super()
		this.state = {
			showObj:data.listPage.meishi[store.getState().shopNum],
			 
		}
		console.log(this.state.showObj);
		
		this.state.goodsType=data.listPage.meishi[0].showPage.goods.goodsType;
		this.state.goodsArr = data.listPage.meishi[0].showPage.goods.goodsArr[0];
		
		this.goodsTypeClick = this.goodsTypeClick.bind(this);
		this.add = this.add.bind(this);
		this.jian = this.jian.bind(this);
		
		
	}
	
	goodsTypeClick(e){
		this.setState({
			goodsArr:this.state.showObj.showPage.goods.goodsArr[e.target.dataset.num],
			
		})
	}
	add(e){
		
		this.setState({
			chooseNum:this.state.goodsArr[e.currentTarget.dataset.num].chooseNum += 1
		})
		
	}
	jian(e){
	
			this.state.goodsArr[e.currentTarget.dataset.num].chooseNum -=1;
			this.forceUpdate();
			if(this.state.goodsArr[e.currentTarget.dataset.num].chooseNum<=0){
				this.state.goodsArr[e.currentTarget.dataset.num].chooseNum = 0
			}

		
	}



render(){
		
			return (<div className="GoodsList">
				<div className='typeList'>
					{
						this.state.goodsType.map(function(item,index,arr){
							return <div onClick={this.goodsTypeClick} key={index} data-num={index} className='typeListItem'>{item}</div>
						},this)
					}
				</div>
				<div className='foodsList'>
				
					{
						this.state.goodsArr.map(function(item,index,arr){
							
							return <div key={index} className='Choosefoods'>
									<div className="ChoosefoodsLeft"><img  key={index} data-num={index} className='foodsImg' src={item.goodsImg} /></div>
									<div className="Choosefoodsright">
											<div className="cfr_one"><div  data-num={index} className='foodsName'>{item.name}</div></div>
											<div className="cfr_two">
												<div  data-num={index} className='foodsVolumn'>月售{item.salesVolumn}份</div>
												<div  data-num={index} className='foodsPrice'>好评率{item.goodsPrice}%</div>
											</div>
		
											<div  data-num={index} className="cfr_three" >
												<div className="cfrt_price">
													<span>￥</span>
													<div>{item.goodsPrice}</div>
												</div>
												<div className="cfrt_choose">
													<span data-num={index} className="iconfont icon-jian" onClick={this.jian}></span>
													<div>{item.chooseNum}</div>
													<span data-num={index} className="iconfont icon-jia" onClick={this.add}></span>
												</div>
												
										    </div>
											
									</div>
							
								</div>
						},this)
						
					}
				
				</div>
			
			</div>)
	}
}
export default Goods;