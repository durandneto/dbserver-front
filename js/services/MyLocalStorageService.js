const DBServerStorage = function($window) {

  return {
    remove: function(key, value) {
      $window.localStorage.removeItem(key);
    },
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key,_callback) {
      try{
        var obj = JSON.parse($window.localStorage[key] || null);
        if(_callback != undefined){
          _callback(obj);
        }else{
          return obj;
        }
      }catch(error){
        return null;
      }
    }
  }

};

DBServerStorage.$inject = ['$window']; 

export default DBServerStorage;