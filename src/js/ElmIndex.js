import React,{Component} from 'react';
import store from './store.js';
import data from './data.js';

import IndexTop from './ElmIndex/ElmIndexTop.js';
import IndexTehui from './ElmIndex/ElmIndexTehui.js';
import IndexXianLiang from './ElmIndex/ElmIndexXianLiang.js';
import IndexMain from './ElmIndex/ElmIndexMain.js';
import Indexfooter from './ElmIndex/ElmIndexfooter.js';

class ElmIndex extends Component{
	constructor(){
		super()
	}
	
	goPage(){
		console.log(store.getState());
		//组件页面的转换。是redux的Action的方法吗？？是的就是传到story.js 组件的acition.type.
		store.dispatch({
			type:'listPage'
		})
	}
	//JSX语法
	render(){
		return (<div>
					<IndexTop />
					<IndexTehui />
					<IndexXianLiang />
					<IndexMain />
					<Indexfooter />
				</div>)
	}
}

export default ElmIndex;
