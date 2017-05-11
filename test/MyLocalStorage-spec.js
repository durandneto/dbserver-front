describe('MyLocalStorage', function () {
    'use strict';

    var $DBServerStorage;
    var $window;

    beforeEach(function () {
        module('app');

        inject(function($injector){
            $DBServerStorage = $injector.get('$DBServerStorage');
        });

    });

    it('testindo main service title', function () {
        var object = {
            name: 'Durand Neto'
        };

        $DBServerStorage.set('name', object.name)
        expect($DBServerStorage.get('name')).toEqual('Durand Neto');
        
        $DBServerStorage.setObject('object',object)
        expect($DBServerStorage.getObject('object').name).toEqual('Durand Neto');

        $DBServerStorage.remove('object')
        expect($DBServerStorage.getObject('object')).toBeNull();
    });

});
