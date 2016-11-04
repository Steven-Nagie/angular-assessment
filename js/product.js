angular.module('app').directive('product', function() {

  return {
    templateUrl: './views/product-tmpl.html',
    scope: {
      price: '@price',
      image: '@image',
      title: '@title',
      desc: '@desc',
      id: '@identity'
    },
    controller: function($scope) {
        $scope.imageHidden = true;
        $scope.linkHidden = false;
    },
    link: function(scope, element, attributes) {

    }

  };

});
