import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {changeDish} from './reducer.js';
import {selectDishAction} from './action.js';

let store = createStore(changeDish);

class Dishes extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			luckyDish: store.getState()
		}
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}
	componentWillMount() {
		let _this = this;
		store.subscribe(() => {
			_this.setState({
				luckyDish: store.getState()
			})
		})
	}
	componentWillUnmount() {
		let _this = this;
		store.subscribe(() => {
			_this.setState({
				luckyDish: store.getState().luckyDish
			})
		})();
	}
	handleBtnClick(){
		store.dispatch(selectDishAction());
	}
	render(){
		return (
			<div>
					<button onClick={this.handleBtnClick}>点菜</button>
					<div>{this.state.luckyDish}</div>
			   </div>
			)
	}
}

ReactDom.render(<Dishes/>, document.querySelector('#main'));