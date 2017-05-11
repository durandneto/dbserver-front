const DBServerUrlManager = function () {

  /**
  * @description: This function return the url to load user
  * @params: {void}
  * @return: {String}
  * @developer : Durand Neto
  */
  function loadUserGetMe() {
    return '/user/me';
  }; 
  /**
  * @description: This function return the url to load all restaurants
  * @params: {void}
  * @return: {String}
  * @developer : Durand Neto
  */
  function loadRestaurants() {
    return '/restaurant';
  }; 
  /**
  * @description: This function return the url to suggest a restaurant
  * @params: {void}
  * @return: {func}
  * @developer : Durand Neto
  */
  function suggestRestaurant() {
    return '/restaurant/suggest';
  }; 
  /**
  * @description: This function return the url to user alerts
  * @params: {Void}
  * @return: {func}
  * @developer : Durand Neto
  */
  function loadUserAlerts() {
    return '/user/alerts';
  }; 

  return {
    loadUserGetMe: loadUserGetMe
    , loadRestaurants: loadRestaurants
    , suggestRestaurant: suggestRestaurant
    , loadUserAlerts: loadUserAlerts
  };

}

export default DBServerUrlManager;