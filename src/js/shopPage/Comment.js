import React,{Component} from 'react';
import store from '../store.js';


class Comment extends Component{
	constructor(){
		super()
	}
	goPage(){
		console.log(store.getState());
		store.dispatch({
			type:'listPage'
		})
	}
	
	render(){
		return <h1 onClick={this.goPage}>Comment</h1>
	}
}


export default Comment;
