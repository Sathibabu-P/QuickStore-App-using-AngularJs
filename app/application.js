
var mainApp = angular.module("mainApp", ['ngRoute']);



      mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/', {
                  templateUrl: 'partials/productlist.html',
                  controller: 'ProductListController'
               }).
               when('/viewProduct/:ProductName', {
                  templateUrl: 'partials/viewproduct.html',
                  controller: 'viewProductController'
               }).              
               otherwise({
                  redirectTo: '/'
               });
         }]);



