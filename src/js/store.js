//{createStore}是redux的方法，可以拿到store。
import {createStore} from 'redux';

//redux模块。改变状态state(组件页面之间的转换viewCom，新值旧值的转换numId)。都需要redux模块的作用。
//redux就是用来统一管理项目中的状态（state），redux重要关注的几点：Actions，Reducers，Store。
// reducer(Function)：两个参数：state和action，返回一个state。 不要对参数state进行修改，需要返回一个新的对象
var reducer = function(state,action){
	var newState = {
		//viewCom默认值 index 
		viewCom:'index',
	};
	console.log("这是action.type"+action.type);
	if(action.type){
		newState.viewCom = action.type;
		newState.shopNum = action.numId;
		console.log("这是shopNum"+newState.shopNum);
		console.log("这是action.numId"+action.numId);
	}
	//返回新的状态
	return newState;
}
// redux的几个方法之一createStore(),
// 创建一个Redux store来存放应用中所有的state，一个应用只能有一个store。函数返回store对象
var store = createStore(reducer);
export default store;
 