
export default angular.module('foo', [])
.controller('FooController', FooController);

function FooController($q){
	this.bar = function(){
		return $q.when('far');
	}
}