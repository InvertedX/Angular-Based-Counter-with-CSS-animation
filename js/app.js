 
 var myApp = angular.module('myApp',[]);
 myApp.controller('Counter',function ($scope,$timeout) {
    $scope.counter = 50;
    $scope.onTimeout = function(){
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
    if($scope.counter==0){
      console.log("What are you...");
     
    }
    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }
            
}
);
