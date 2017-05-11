const DBServerUser = function ( $DBServerApi, $DBServerStorage, $DBServerUrlManager ) {

  let UserData = {isLogged:false};

  /**
  * @description: This function load user from api
  * @params: {void}
  * @return: {function}
  * @developer : Durand Neto
  */
  function load(_success, _error ) {
    //get the user from api
    $DBServerApi.get( $DBServerUrlManager.loadUserGetMe() , (response) => {
        // set user on localstorage
        $DBServerStorage.setObject('User',response.data.user);
        // set user on local variable
        UserData = response.data.user;
        UserData.isLogged = true;
        // call function callback success

        if ( _success )
          _success(UserData);
    },  (error) => {
      // reset user data
        UserData = {isLogged:false};
        if ( _error )
          _error(response);
    });
  }; 

  /**
  * @description: This function logout user
  * @params: callback function function will be executed when logout
  * @return: void
  * @developer : Durand Neto
  */
  function logout(_callback) {
    $DBServerStorage.remove('user');
    $DBServerStorage.remove('RestaurantsSuggestions');
    $DBServerStorage.remove('RestaurantsRates');
    UserData = {isLogged:false};
    if(_callback != undefined){
      _callback();
    }
  }; 


  /**
  * @description: This function return the user attr
  * @params: Attr String
  * @return: user attr
  * @developer : Durand Neto
  */

  function get(attr) {
    return UserData[attr];
  }

  return {
    load: load
    , get: get
    , logout: logout
  };

}

DBServerUser.$inject = [ '$DBServerApi', '$DBServerStorage', '$DBServerUrlManager' ]; 

export default DBServerUser;