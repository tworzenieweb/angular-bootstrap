import IScope = angular.IScope;
import IIntervalService = angular.IIntervalService;
import { PaymentSelector } from "./controllers";

var appModule = angular.module("myApp", []);

appModule.controller(
    "PaymentSelector", ["$scope", "$interval", ($scope:IScope, $interval:IIntervalService) => new PaymentSelector($scope, $interval)]
);