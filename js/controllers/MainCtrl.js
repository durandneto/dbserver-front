const MainCtrl = function($scope, $DBServerUser, $DBServerUserAlert) {
    $scope.title = 'Code Challenge - Pragmateam';
    $scope.description = 'Our feature teams are facing a huge problem. Since our teams are very democratic, every single day they spend about 30 minutes debating and trying to decide where to go for lunch.';
    $scope.User =  $DBServerUser;
    $scope.UserAlerts =  $DBServerUserAlert;
}

MainCtrl.$inject = ['$scope', '$DBServerUser', '$DBServerUserAlert']; 

export default MainCtrl;