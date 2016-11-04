angular.module('app').controller('mainCtrl', function($scope, mainService) {

  $scope.products = [];

  $scope.getData = function() {
    mainService.getData().then(function(response) {
      $scope.products = response.data;
      // return $scope.products;
    }).then(function() {
      console.log($scope.products);
    });
  };

  $scope.getData();

  $scope.imageHidden = false;

});
