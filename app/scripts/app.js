
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
                'footer': { templateUrl : 'views/newfooter.html' }
            }
        })

        .state('app.authority', {
            url:'authorities',
            views: {
                'content@': {
                  templateUrl : 'views/authority.html',
                  controller  : 'AuthorityController'
                }
            }
        })

        .state('app.purchaseorder', {
            url:'purchaseorders',
            views: {
                'content@': {
                  templateUrl : 'views/purchaseorder.html',
                  controller  : 'PurchaseOrderController'
                }
            }
        })

        .state('app.podetails', {
            url: 'podetails/:id',
            views: {
                'content@': {
                    templateUrl : 'views/podetail.html',
                    controller  : 'PODetailController'
               }
            }
        })

        .state('app.paymentplan', {
            url:'paymentplans',
            views: {
                'content@': {
                  templateUrl : 'views/paymentplan.html',
                  controller  : 'PaymentPlanController',
                  resolve: {
                    plans: ['paymentBillService', function (paymentBillService) {
                      return paymentBillService.restPaymentPlans().query({bill_number:"x"}).$promise;
                    }]
                  }
                }
            }
        })

        .state('app.paymentbill', {
            url:'paymentbills?status',
            views: {
                'content@': {
                  templateUrl : 'views/paymentbill.html',
                  controller  : 'PaymentBillController'
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
