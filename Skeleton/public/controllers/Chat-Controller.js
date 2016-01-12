(function () {
    'use strict'

    function ChatController($scope, $http, $rootScope, globalConstants) {
        var socket = io('http://localhost:3001');
        socket.on('message', function (data) {
            console.log(data);
        });
        $scope.send = function () {
            socket.emit('message', { message: $scope.msg });
        }
    };

    angular.module('app')
        .controller('ChatController', ['$scope', '$http', '$rootScope', 'globalConstants', ChatController]);
} ());