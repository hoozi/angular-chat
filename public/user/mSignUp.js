/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-06-02 13:15:34
 * @version : 0.0.1
 */
var signUp = angular.module('signUp', []);
signUp.controller('signUpForm', ['$scope', function($scope){
	$scope.submitForm = function(v,event) {
		        
  
		if(!v) {
			alert("error");
			event.preventDefault(); //标准  
       	 	event.returnValue = false //IE  
			return false;
		}
	}
}])


