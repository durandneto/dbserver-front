const UserCtrl = function($scope, $DBServerUser, $DBServerUserAlert) {

  $scope.User = $DBServerUser;
  $scope.UserAlerts =  $DBServerUserAlert;

}

UserCtrl.$inject = ['$scope', '$DBServerUser', '$DBServerUserAlert']; 

export default UserCtrl;