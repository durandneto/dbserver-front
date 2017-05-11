
const DBServerApiService = function($http, $DBServerStorage) {
  const api = 'http://localhost:3010/api/v1';

  return {
    /**
    * @description: This function send to api a request type POST and execute a callback
    * @params: url String endpoint
    * @params: params Object object to send de endpoint
    * @params: callback function function will be executed when logout
    * @return: void
    * @developer: Durand Neto
    */
    post: function(url, params, _onSuccessCallback, _onErrorCallback) {
      $DBServerStorage.getObject('User', (User) => {
        if(User != undefined){
          // exist a user logged and interate the request header with user's info
          $http.defaults.headers.common.Authorization = User.access_token;
        }
        $http.post( api + url, params ).then(_onSuccessCallback, _onErrorCallback);
      });
    }
     /**
    * @description: This function send to api a request type GET and execute a callback
    * @params: url String endpoint
    * @params: callback function function will be executed when logout
    * @return: void
    * @developer: Durand Neto
    */
    , get: function(url, _onSuccessCallback, _onErrorCallback) {
      $DBServerStorage.getObject('User', (User) => {
        if(User != undefined){
          $http.defaults.headers.common.Authorization = User.access_token;
        }
        $http.get( api + url).then(_onSuccessCallback, _onErrorCallback);
      });
      
    }
     /**
    * @description: This function send to api a request type DELETE and execute a callback
    * @params: url String endpoint
    * @params: callback function function will be executed when logout
    * @return: void
    * @developer: Durand Neto
    */
    , delete: function(url, _callback) {
      /*TODO*/
    }
     /**
    * @description: This function send to api a request type PATCH and execute a callback
    * @params: url String endpoint
    * @params: callback function function will be executed when logout
    * @return: void
    * @developer: Durand Neto
    */
    , patch: function(url,params , _callback) {
      /*TODO*/
    }
     /**
    * @description: This function send to api a request type PUT and execute a callback
    * @params: url String endpoint
    * @params: callback function function will be executed when logout
    * @return: void
    * @developer: Durand Neto
    */
    , put: function(url,params , _callback) {
      /*TODO*/
    }
  }

};

DBServerApiService.$inject = ['$http', '$DBServerStorage']; 

export default DBServerApiService;
