var coffeeApp = angular.module('coffeeApp', ['ngResource', 'ui.bootstrap']);

coffeeApp.controller('OrderController', function ($scope, $resource) {
    $scope.types = [
        {name: 'Cappuccino', family: 'coffee'},
        {name: 'Latte', family: 'coffee'},
        {name: 'Tea', family: 'that other drink'},
        {name: 'Espresso', family: 'coffee'}
    ];
    $scope.sizes = ['Small', 'Medium', 'Large'];
    $scope.messages = [];

    $scope.giveMeCoffee = function() {
        $scope.drink.coffeeShopId = 1;
        var CoffeeOrder = $resource('/service/coffeeshop/order/');
        CoffeeOrder.save($scope.drink,
            function (order) {
                $scope.messages.push({type: 'success', msg: 'Order sent!'})
            });
    };

    $scope.closeAlert = function (index) {
        $scope.messages.splice(index, 1);
    };

});