
var mainApp = angular.module("mainApp", ['ngRoute','ui.bootstrap','uiSlider']);



      mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/', {
                  templateUrl: 'partials/productlist.html',
                  controller: 'ProductListController'
               }).
               when('/viewProduct/:ProductId', {
                  templateUrl: 'partials/viewproduct.html',
                  controller: 'viewProductController'
               }).              
               otherwise({
                  redirectTo: '/'
               });
         }]);



