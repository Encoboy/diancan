import React from 'react';//引入reactJS模块
import ReactDOM from 'react-dom';//虚拟DOM
import './css/index.css';//css的导入
import './css/iconfont.css';//阿里图标的引入
import store from './js/store.js';//引入js

//引入子组件模块
import ElmIndex from './js/ElmIndex.js';
import ListPage from './js/ListPage.js';
import ShopPage from './js/ShopPage.js';
import ShopCur from './js/shopPage/shopCur.js';
import Dingdan from './js/ElmIndex/EIfooter/footerDingdan.js';
import My from './js/ElmIndex/EIfooter/footerMy.js';
import Faxian from './js/ElmIndex/EIfooter/footerFaxian.js'

//渲染出来的视图 viewCom，从store.js可以知道默认值是index
var viewComName,viewCom=<ElmIndex />;

var togglePage = function(){
	console.log(store.getState());
	//viewComName 改变后目前的状态。
	//默认是index，当点击ListPage后，Action执行后，viewComName就变成了listPage。store.getState获取状态
	viewComName=store.getState().viewCom;
	switch(viewComName){
		case 'index':
		 	viewCom = <ElmIndex  />
		 	break;
		case 'listPage':
		 	viewCom = <ListPage  />
		 	break;
		case 'shopPage':
		 	viewCom = <ShopPage  />
		 	break;
		 case 'shopCur':
		 	viewCom = <ShopCur />
		 	break;
		 case 'dingdan':
		 	viewCom = <Dingdan />
		 	break;
		 case 'my':
		 	viewCom = <My />
		 	break;
		 case 'faxian':
		 	viewCom = <Faxian />
		 	break;
		default:
			viewCom = <ElmIndex  />
		 	break;
		 
	}
}
//redux的方法，通过监听state状态是否发生改变，发生改变就会重新触发虚拟DOM
// 添加一个变化监听器，每当 dispatch action 的时候就会执行，dispatch.action()改变state的唯一方法
store.subscribe(function(){
	togglePage();
	ReactDOM.render( viewCom,document.getElementById('root'))
})
//ReactDom表示虚拟ODM
// 首次要手动渲染
ReactDOM.render(viewCom,document.getElementById('root'))
