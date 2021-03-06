'use strict';

/**
 * @ngdoc overview
 * @name proyectofinal2App
 * @description
 * # proyectofinal2App
 *
 * Main module of the application.
 */
angular
  .module('proyectofinal2App', ['ngAnimate','ngAria','ngCookies','ngMessages','ngResource','ngRoute','ngSanitize','ngTouch','ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
