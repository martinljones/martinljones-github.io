angular.module('feedbackSystem', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("home", {
        controller:"homeCtrl",
        url:"/",
        templateUrl:"./js/templates/homeView.html"
      })

      .state("storeTag", {
        controller:"storeTagCtrl",
        url:"/storeTag",
        templateUrl:"./js/templates/storeTag.html"
      })


      $urlRouterProvider
        .otherwise("/");
  });
