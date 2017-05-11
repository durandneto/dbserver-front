describe('ExampleService2', function () {
    'use strict';

    var $controller;

    beforeEach(function () {
        module('app');

       inject(function(_$controller_){ 
           $controller = _$controller_; 
       });
    });

    it('testindo main controller title', function () {
        var $scope = {};
        var controller = $controller('MainCtrl', { $scope: $scope });
        expect($scope.title).toEqual('Code Challenge - Pragmateam');
        expect($scope.description).toEqual('Our feature teams are facing a huge problem. Since our teams are very democratic, every single day they spend about 30 minutes debating and trying to decide where to go for lunch.');
    });

});
