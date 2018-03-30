(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var todosApp = angular.module("todosApp",[]);

	todosApp.controller("todosController",["$scope",function ($scope) {
		/*初始化数据*/
		$scope.message = "";
		$scope.items = [
			{id:0.1,content:"看书",completed:false},
			{id:0.2,content:"健身",completed:true},
			{id:0.3,content:"跑步",completed:false},
			{id:0.4,content:"看电视",completed:false}
		];
		/*提供添加选项的功能*/
		$scope.add = function () {
			$scope.items.push({
				id:Math.random(),
				content:$scope.message,
				completed:false
			});
			$scope.message = "";
		};
		/*提供删除选项的功能*/
		$scope.delete = function (id) {
			var result = window.confirm("确定要删除当前任务吗？？？");
			if(result===false)return;
			for(var i=0;i<$scope.items.length;i++){
				if($scope.items[i].id===id){
					$scope.items.splice(i,1);
					break;
				}
			}
		}
		/*提供清空已完成任务功能*/
		$scope.clear = function () {
			var save = [];
			for(var i=0;i<$scope.items.length;i++){
				if(!$scope.items[i].completed){
					save[save.length] = $scope.items[i];
				}
			}
			$scope.items = save;
		}
		/*判断是否有已经完成的任务*/
		$scope.exitCompleted = function(){
			for(var i=0;i<$scope.items.length;i++){
				if($scope.items[i].completed){
					return true;
				}
			}
			return false;
		}
		/*编辑功能实现部分*/
		$scope.isEditingItem = -1;
		$scope.cutEditItem = function (id) {
			for(var i=0;i<$scope.items.length;i++){
				//判断如果当前编辑项目为已完成项，则不可继续编辑
				if($scope.items[i].id === id&&$scope.items[i].completed){
					return;
				}
			}
			$scope.isEditingItem = id;
		};
		$scope.saveEdite = function () {
			$scope.isEditingItem = -1;
		}
		/*全选和反选的功能实现*/
		var toggleFlag = true;
		$scope.toggleAll = function(){
			for(var i=0;i<$scope.items.length;i++){
				$scope.items[i].completed =toggleFlag;
			}
			toggleFlag = !toggleFlag;
		}
	}]);
})(window);
