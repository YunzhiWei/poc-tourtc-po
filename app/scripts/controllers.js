
'use strict';

angular.module('week3App')

  .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

      $scope.tab = 1;
      $scope.filtText = '';
      $scope.showDetails = false;

      $scope.showMenu = false;
      $scope.message = "Loading ...";
      menuFactory.getDishes().query(
        function(response) {
          $scope.dishes = response;
          $scope.showMenu = true;
        },
        function(response) {
          $scope.message = "Error: " + response.status + " " + response.statusText;
        }
      );

      $scope.select = function(setTab) {
        $scope.tab = setTab;

        if (setTab === 2) {
          $scope.filtText = "appetizer";
        }
        else if (setTab === 3) {
          $scope.filtText = "mains";
        }
        else if (setTab === 4) {
          $scope.filtText = "dessert";
        }
        else {
          $scope.filtText = "";
        }
      };

      $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
      };

      $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
      };
  }])

  .controller('ContactController', ['$scope', function($scope) {

      $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

      var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

      $scope.channels = channels;
      $scope.invalidChannelSelection = false;

  }])

  .controller('FeedbackController', ['$scope', 'menuFactory', function($scope, menuFactory) {

    $scope.allFeedback = menuFactory.feedbacks().query();
    console.log("all feedback: ", $scope.allFeedback);

    $scope.sendFeedback = function() {

        console.log($scope.feedback);

        if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        }
        else {
            menuFactory.feedbacks().save(
              $scope.feedback,
              function() {
                alert("Your feedback is recorded!");
                $scope.allFeedback.splice(0, $scope.allFeedback.length);
                $scope.allFeedback = menuFactory.feedbacks().query();
              }
            );
            $scope.invalidChannelSelection = false;
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            $scope.feedbackForm.$setPristine();

            // console.log($scope.feedback);
            // console.log($scope.allFeedback);
        }
    };

    $scope.delFB = function(index) {
      menuFactory.feedbacks().delete(
        {id:index},
        function() {
          $scope.allFeedback.length = 0;
          $scope.allFeedback = menuFactory.feedbacks().query();
        }
      );
    };
  }])

  .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
      $scope.showDish = false;
      $scope.message = "Loading ...";
      menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
      .$promise.then(
        function(response) {
          $scope.dish = response;
          $scope.showDish = true;
        },
        function(response) {
          $scope.message = "Error: " + response.status + " " + response.statusText;
        }
      );;
  }])

  .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {

      //Step 1: Create a JavaScript object to hold the comment from the form
      $scope.newcomment = {
          rating:5,
          comment:"",
          author:"",
          date:""
      };

      $scope.submitComment = function () {

          //Step 2: This is how you record the date
          $scope.newcomment.date = new Date().toISOString();

          // Step 3: Push your comment into the dish's comment array
          $scope.dish.comments.push($scope.newcomment);
          menuFactory.getDishes().update({id:$scope.dish.id}, $scope.dish);

          //Step 4: reset your form to pristine
          $scope.commentForm.$setPristine();

          //Step 5: reset your JavaScript object that holds your comment
          $scope.newcomment = {
              rating:5,
              comment:"",
              author:"",
              date:""
          };
      };
  }])

  .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {

    $scope.promotions = menuFactory.getPromotions().query();

    $scope.chef = corporateFactory.getLeaders().get({id:3});

    $scope.showDish = false;
    $scope.message = "Loading ...";
    menuFactory.getDishes().get({id:0})
    .$promise.then(
      function(response) {
        $scope.dish = response;
        $scope.showDish = true;
      },
      function(response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      }
    );

  }])

  .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {

    $scope.leaders = corporateFactory.getLeaders().query();

  }])

  ;
