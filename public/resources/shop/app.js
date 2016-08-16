webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var controllers_1 = __webpack_require__(2);
	var appModule = angular.module("myApp", []);
	appModule.controller("PaymentSelector", ["$scope", "$interval", function ($scope, $interval) { return new controllers_1.PaymentSelector($scope, $interval); }]);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var payment_selector_1 = __webpack_require__(3);
	exports.PaymentSelector = payment_selector_1.PaymentSelector;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var PaymentSelector = (function () {
	    function PaymentSelector($scope, $interval) {
	        var _this = this;
	        this.scope = $scope;
	        $interval(function () {
	            _this.scope.test = new Date().toLocaleTimeString();
	        }, 2000);
	    }
	    return PaymentSelector;
	}());
	exports.PaymentSelector = PaymentSelector;


/***/ }
]);