var app = angular.module('app', [])

app.controller('myController', ['$scope', function($scope){
	$scope.a=1;
	$scope.b=2;
	$scope.c=4;

	
	$scope.$watchGroup(["a","b"],function (newValue,oldValue){
		if(newValue!=oldValue){
			$scope.c=$scope.b*$scope.a
		}
	})
}])
