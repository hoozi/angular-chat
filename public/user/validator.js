/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-06-03 16:30:51
 * @version : 0.0.1
 */
var validator = angular.module("validator", []);

validator.directive("isEqual", function(){
	// Runs during compile
	return {
		require: "ngModel",
		link: function(scope, elem, attrs, ctrl) {
			var compare = $("input[name='"+attrs.isEqual+"']") 
			elem.add(compare).on("keyup", function(){
				scope.$apply(function(){
					var v = compare.val() === elem.val();
					ctrl.$setValidity("isequal",v)
				})
			})
		}
	}
});

validator.directive("hasName", ["$http", function($http){
	// Runs during compile
	return {
		require: "ngModel",
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function(newVal){
				$http.get("/user/hasName",{
					params:{
						login_name:newVal
					}
				}).success(function(data) {
					if(data==0) {			
						ctrl.$setValidity("hasname", false);
					} else {
						ctrl.$setValidity("hasname", true);
					}
				})
			})
		}
	};
}]);