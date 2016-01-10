(function () {
    'use strict'

    function CategoriesCtrl($scope) {
        $scope.deleteCategory = function() {
            alert();
        }
    };

    angular.module('app')
        .controller('CategoriesCtrl', ['$scope', CategoriesCtrl]);
} ());