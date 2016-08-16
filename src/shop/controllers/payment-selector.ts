import IScope = angular.IScope;
import IIntervalService = angular.IIntervalService;

export class PaymentSelector {
    scope: any;

    constructor($scope: IScope, $interval: IIntervalService) {
        this.scope = $scope;

        $interval(() => {
            this.scope.test = new Date().toLocaleTimeString();
        }, 1000);
    }
}