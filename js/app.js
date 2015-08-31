 
 var myApp = angular.module('myApp',[]);
// myApp.factory('Data',function(){
// 	return {message:""}
// }) 


// myApp.filter('reverse',function()
// {
// 		return function(text)
// 		{
// 	  	return  text.split("").reverse().join("");

// 		} 
// }) 


// myApp.controller('myctrl',function($scope,Data) 
// { 
//  	 $scope.data=Data;
 	  
//  });
 myApp.controller('Counter',function ($scope,$timeout) {
    $scope.counter = 50;
    $scope.onTimeout = function(){
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
    
    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }
            
}
);
