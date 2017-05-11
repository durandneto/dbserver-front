const RestaurantVotesCtrl = function($scope, $DBServerRestaurant) {

    $scope.restaurant = $DBServerRestaurant;

    $scope.suggest = ( Restaurant ) => {
        $DBServerRestaurant.suggest(Restaurant,_onSuggestSucces,_onSuggestError);
    }

    function _onSuggestSucces( response ) {
        console.info('_onSuggestSucces', response);
        // $scope.$apply();
    }

    function _onSuggestError( error ) {
        console.error('_onSuggestError', error);
        // $scope.$apply();
    }

}

RestaurantVotesCtrl.$inject = ['$scope', '$DBServerRestaurant']; 

export default RestaurantVotesCtrl;