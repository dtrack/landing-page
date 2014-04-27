'use strict';

angular.module('landingApp')
  .controller('MainCtrl', function($scope) {
    $scope.saveEmail = function() {
        var email = $scope.email;
        console.log(email);
    };
  });
