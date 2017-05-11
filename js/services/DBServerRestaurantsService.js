const DBServerRestaurant = function ( $DBServerApi, $DBServerStorage, $DBServerUrlManager, $timeout ) {


  let Data = [];
  let DataSuggetion = [];
  let DataVotted = [];
  let DataAlerts = [];

  /**
  * @description: This function load restaurant from api
  * @params: {void}
  * @return: {function}
  * @developer : Durand Neto
  */
  function load(_success, _error ) {
    //get the restaurant from api
    $DBServerApi.get( $DBServerUrlManager.loadRestaurants() , ( response) => {
        // set restaurant on localstorage
        $DBServerStorage.setObject('RestaurantsSuggestions',response.data.suggestions);
        $DBServerStorage.setObject('RestaurantsRates',response.data.rates);
        // set my suggestions
        DataSuggetion = response.data.suggestions;
        // set restaurants rated
        DataVotted = response.data.rates;
        // set restaurants rated
        DataAlerts = response.data.alerts;
        if ( _success ){
          $timeout(()=>{
            _success(response.data);
          })
        }
    }, ( error ) => {
      // reset restaurant data
        DataSuggetion = [];
        if ( _error ){
           $timeout(()=>{ 
            _error(error);
          });
        }
    });
  }; 
  /**
  * @description: This function save restaurant suggests
  * @params: {Restaurant}
  * @return: {function}
  * @developer : Durand Neto
  */
  function suggest(Restaurant, type, _success, _error ) {
  //get the restaurant from api
    $DBServerApi.post( $DBServerUrlManager.suggestRestaurant(), {restaurant: Restaurant.id, type: type} , (response) => {
        // set restaurant on localstorage
        $DBServerStorage.setObject('RestaurantsSuggestions',response.data.suggestions);
        $DBServerStorage.setObject('RestaurantsRates',response.data.rates);
        // set my suggestions
        DataSuggetion = response.data.suggestions;
        // set restaurants rated
        DataVotted = response.data.rates;
        // set restaurants alerrts
        DataAlerts = response.data.alerts;
        // call function callback success
        if ( _success ){
          $timeout(()=>{
            _success(response.data);
          })
        }
      
    }, ( error ) => {
      // reset restaurant data
        DataVotted = [];
        if ( _error ){
           $timeout(()=>{ 
            _error(_error);
          });
        }
    });
  }; 

  function getDataSuggestions() {
    return DataSuggetion
  }
  function getDataVotted() {
    return DataVotted
  }
  function getAll() {
    return Data
  }
  function getDataAlerts() {
    return DataAlerts
  } 

  return {
    load: load
    , suggest: suggest
    , getAll: getAll
    , getVotted: getDataVotted
    , getAlerts: getDataAlerts
    , getSuggestions: getDataSuggestions
  };

}

DBServerRestaurant.$inject = [ '$DBServerApi', '$DBServerStorage', '$DBServerUrlManager', '$timeout']; 

export default DBServerRestaurant;