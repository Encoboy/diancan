import React,{Component} from 'react';
import store from './store.js';

import ShopPageTop from './shopPage/shopPageTop.js';
import ShopPageMain from './shopPage/shopPageMain.js';
import ShopPageBuyCar from './shopPage/shopPageBuyCar.js';

class ShopPage extends Component{
	constructor(){
		super()
		this.state = {
			count:{num:0}
		}
		this.fatherState= this.fatherState.bind(this);
		
		
	}
	
	
	fatherState(){
		this.state.count.num++;
		this.forceUpdate();
	}
	
	render(){
		return (
			<div className="shopPagemain">
				<ShopPageTop />
				<ShopPageMain />
				<ShopPageBuyCar num={this.state.count.num} num={this.fatherState}/>
			</div>
		)
	}
}


export default ShopPage;