/**
 * Author: Zane 448482356@qq.com
 * Date: 2016-01-25
 */


var component = window.location.href.split('components/')[1].split('/')[0];
require('./components/'+component+'/demo');

// import scrolltop from './components/scrolltop/demo';
// import checkbox from './components/checkbox/demo';

// let App = {
// 	scrolltop: require('./components/scrolltop')
// };

// let pathname = window.location.pathname;

// let componentName = pathname.split('/')[2];

// let C = App[componentName];	

// React.render (
// 	<C  / > , 
// 	document.getElementById('component')
// );