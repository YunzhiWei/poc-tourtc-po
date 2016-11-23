
'use strict';

angular.module('week3App', ['ui.router', 'ngResource'])

.constant("baseURL","http://localhost:3000/")

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        // route for the home page
        .state('app', {
            url:'/',
            views: {
                'header': { templateUrl : 'views/newheader.html' },
                'content': {
                    //templateUrl : 'views/home.html',
                    //controller  : 'IndexController'
                    template: '<h1>hello world</h1>'
                },
                'footer': { templateUrl : 'views/newheader.html' }
            }
        })
        // route for the authority
        .state('app.authority', {
            url:'authorities',
            views: {
                'content@': {
                  templateUrl : 'views/authority.html',
                  controller  : 'AuthorityController'
                }
            }
        })
        // route for the authority
        .state('app.purchaseorder', {
            url:'purchaseorders',
            views: {
                'content@': {
                  templateUrl : 'views/purchaseorder.html',
                  controller  : 'PurchaseOrderController'
                }
            }
        })
        // route for the dishdetail page
        .state('app.podetails', {
            url: 'podetails/:id',
            views: {
                'content@': {
                    templateUrl : 'views/podetail.html',
                    controller  : 'PODetailController'
               }
            }
        })
        // route for the aboutus page
        .state('app.aboutus', {
            url:'aboutus',
            views: {
                'content@': {
                  templateUrl : 'views/aboutus.html',
                  controller  : 'AboutController'
                }
            }
        })
        // route for the contactus page
        .state('app.contactus', {
            url:'contactus',
            views: {
                'content@': {
                    templateUrl : 'views/contactus.html',
                    controller  : 'ContactController'
                 }
            }
        })
        // route for the menu page
        .state('app.menu', {
            url: 'menu',
            views: {
                'content@': {
                    templateUrl : 'views/menu.html',
                    controller  : 'MenuController'
                }
            }
        })
        // route for the dishdetail page
        .state('app.dishdetails', {
            url: 'menu/:id',
            views: {
                'content@': {
                    templateUrl : 'views/dishdetail.html',
                    controller  : 'DishDetailController'
               }
            }
        });
        $urlRouterProvider.otherwise('/');
  })
