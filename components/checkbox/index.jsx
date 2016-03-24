/**
 * Author: Zane 448482356@qq.com
 * Date: 2016-03-22
 */

import React from 'react';
import ReactDOM from 'react-dom';
require('./index.less');


export default class Checkbox extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	data: [{
				name: '育儿'
			},{
				name: '自热'
			},{
				name: '动物'
			}]
		};
	}
	check(currentIndex) {
		let data = this.state.data;
		let checkAll = this.refs.checkAll;
		// var d = ReactDOM.findDOMNode(this);
		if (currentIndex > -1) {
			data[currentIndex].checked = !data[currentIndex].checked;
			var checkAllBool = data.every(el => el.checked);
			checkAll.checked = checkAllBool?1:0;
		} else {
			data.map(item => {
				item.checked = checkAll.checked;
			});
		}
		this.setState({
			data: data
		});
	}
	componentDidMount() {

	}
	render() {
		let that = this;
		let dataList = this.state.data.map((item,index) => {
			let checked = null;
			if (item.checked) {
				checked = 'checked';
			}
			return (
				<label key={index}><input type="checkbox" onChange={that.check.bind(that, index)} checked={checked} />{item.name}</label>
			);
		});
		return (
			<div className="checkbox">
				<label><input type="checkbox" onChange={this.check.bind(this)} ref="checkAll" />全部</label>
				{dataList}
			</div>
		);
	}

};

