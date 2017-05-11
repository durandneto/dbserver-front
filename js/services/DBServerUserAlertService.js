const DBServerAlert = function ( $DBServerApi, $DBServerStorage, $DBServerUrlManager ) {

  let Data = [
    { msg: 'Durand Neto, suggeste a restaurant' },
    { msg: 'Shayana Loves Restaurant One' }
  ];
 

  /**
  * @description: This function load restaurant from api
  * @params: {void}
  * @return: {function}
  * @developer : Durand Neto
  */
  function load(_success, _error ) {
    //get the restaurant from api
    $DBServerApi.get( $DBServerUrlManager.loadUserAlerts() , (status, response) => {
      if(status){
        // set restaurant on localstorage
        $DBServerStorage.setObject('UserAlerts',response.data.alert);
        // set restaurant on local variable
        Data = response.data.alert;
        // call function callback success
        if ( _success )
        _success(Data);
      }else{
        // reset restaurant data
        Data = {};
        if ( _error )
        _error(response);
      }
    });
  }; 

  function getAll() {
    return Data
  }

  return {
    load: load
    , getAll: getAll
  };

}

DBServerAlert.$inject = [ '$DBServerApi', '$DBServerStorage', '$DBServerUrlManager' ]; 

export default DBServerAlert;