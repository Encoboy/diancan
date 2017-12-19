import React,{Component} from 'react';
import store from '../store.js';


import Goods from './Goods.js';
import Comment from './Comment.js';
import Shop from './Shop.js';

class ShopPageMain extends Component{
	constructor(){
		super()
		this.state={
			showChildTab:<Goods />
		},
		
		
		this.tabPage = this.tabPage.bind(this);
	}
	tabPage(e){
		console.log(e.target.dataset.num);
		switch(e.target.dataset.num){
			case '0':
			this.setState({
				showChildTab:<Goods />
			});
			this.goods={
			color:'pink'
			};
			this.eval={
				color:'black'
			};
			this.store={
				color:'black'
			};
			break;
			case '1':
			this.setState({
				showChildTab:<Comment />
			});
			this.eval={
				color:'pink'
			};
			this.goods={
			color:'black'
			};
			this.store={
				color:'black'
			};
			break;
			case '2':
			this.setState({
				showChildTab:<Shop />
			});
			this.store={
				color:'pink'
			};
			this.goods={
			color:'black'
			};
			this.eval={
				color:'black'
			};
			break;
		}
		 
		
		
		
	}
	
	render(){
		return (
			<div>
				<div className='shopPageMain_tab'>
					<h1 data-num='0' onClick={this.tabPage} style={this.goods}>商品</h1>
					<h1 data-num='1' onClick={this.tabPage} style={this.eval}>评价</h1>
					<h1 data-num='2' onClick={this.tabPage} style={this.store}>店铺</h1>
				</div>
				
				{this.state.showChildTab}

			</div>
			
		)
	}
}


export default ShopPageMain;
