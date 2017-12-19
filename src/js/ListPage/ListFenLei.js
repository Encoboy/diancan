import React,{Component} from 'react';
import store from '../store.js';

//import ListAllShangjia from './fenlei/fenleiShangjia.js';
//import ListMeishi from './fenlei/fenleiMeishi.js';
//import ListKuaicai from './fenlei/fenleiKuaicai.js';
//import ListTeSe from './fenlei/fenleiTese.js';

class ListFenLei extends Component{
	constructor(){
		super()
		this.state = {
//			showChildList:<ListAllShangjia />
		}
//		this.listFenLeiPage = this.listFenLeiPage.bind(this)
	}
	
//	listFenLeiPage(e){
//		console.log("sss");
//		switch(e.target.dataset.num){
//			case '0' :
//			this.setState({
//				showChildList:<ListAllShangjia />
//			});
//			break;
//			case '1' :
//			this.setState({
//				showChildList:<ListMeishi />
//			});
//			break;
//			case '2':
//			this.setState({
//				showChildList:<ListKuaicai />
//			});
//			break;
//			case '3':
//			this.setState({
//				showChildList:<ListTeSe />
//			});
//			break;
//		}
//	}
	
	
//	<div className="listShangjia">
//					<div  data-num='0' onClick={this.listFenLeiPage}>
//						<div>全部商家</div>
//						<span>6583</span>
//					</div>
//					<div  data-num='1' onClick={this.listFenLeiPage}>
//						<div>美食</div>
//						<span>6190</span>
//					</div>
//					<div  data-num='2' onClick={this.listFenLeiPage}>
//						<div>快餐</div>
//						<span>3542</span>
//					</div>
//					<div  data-num='3' onClick={this.listFenLeiPage}>
//						<div>特色菜系</div>
//						<span>508</span>
//					</div>
//				</div>
//				
//				<div className="listCaixi">
//					{this.state.showChildList}
//				</div>
//	
//	
	
	
	render(){
		return(
			<div className="ListFenLei">
				
			</div>
		)
	}
}
export default ListFenLei;