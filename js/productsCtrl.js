angular.module('app').controller('productsCtrl', function($scope, $stateParams, $http) {

  $scope.productId = $stateParams.id;

  $scope.getSpecific = function() {
    return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products/' + $scope.productId,
    });
  };

  $scope.getSpecific().then(function(response) {
    $scope.productInfo = response.data;
    console.log($scope.productInfo);
  });

});
