'use strict';
import 'angular';
import "angular-ui-router";
import "angular-ui-bootstrap";

import MainCtrl from './controllers/MainCtrl'
import UserCtrl from './controllers/UserCtrl'
import RestaurantCtrl from './controllers/RestaurantsCtrl'

// services
import LocalStorageService from './services/MyLocalStorageService'
import DBServerApi from './services/DBServerApiService'
import DBServerUrlManager from './services/DBServerUrlManagerService'
import DBServerUser from './services/DBServerUserService'
import DBServerRestaurant from './services/DBServerRestaurantsService'
import DBServerUserAlert from './services/DBServerUserAlertService'

/// directives
import Durand from './directives/Durand'
import UserFormLogin from './directives/UserFormLogin'
import RestaurantVotes from './directives/RestaurantVotes'
import RestaurantSuggest from './directives/RestaurantSuggest'
import PageLogged from './directives/PageLogged'
import PageUnlogged from './directives/PageUnlogged'
import UserAlert from './directives/UserAlerts'
import RestaurantMorePopular from './directives/RestaurantMorePopular'
import RestaurantChosenByMost from './directives/RestaurantChosenByMost'

const components = angular.module('app.components', []); 

components.controller('MainCtrl', MainCtrl);
components.controller('UserCtrl', UserCtrl);
components.controller('RestaurantCtrl', RestaurantCtrl);

components.factory('$DBServerStorage', LocalStorageService);
components.factory('$DBServerApi', DBServerApi);
components.factory('$DBServerUrlManager', DBServerUrlManager);
components.factory('$DBServerUser', DBServerUser);
components.factory('$DBServerRestaurant', DBServerRestaurant);
components.factory('$DBServerUserAlert', DBServerUserAlert);

components.directive('durand', Durand);
components.directive('userFormLogin', UserFormLogin);
components.directive('restaurantVotes', RestaurantVotes);
components.directive('restaurantSuggest', RestaurantSuggest);
components.directive('pageLogged', PageLogged);
components.directive('pageUnlogged', PageUnlogged);
components.directive('userAlert', UserAlert);
components.directive('restaurantChosenMost', RestaurantChosenByMost);
components.directive('restaurantMorePopular', RestaurantMorePopular);

const app = angular.module('app', ['app.components', 'ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) { 
  $urlRouterProvider.otherwise("/"); 
      // Now set up the states
  $stateProvider
    .state('app', {
      url: "/",
      template: '<durand></durand>' 
    })

});