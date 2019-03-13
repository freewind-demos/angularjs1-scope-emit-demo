const app = angular.module('app', []);

app.controller('Controller1', function ($scope) {
  $scope.message1 = '???'
  $scope.$on('message', (event, args) => {
    $scope.message1 = args;
  })
});

app.controller('Controller2', function ($scope) {
  $scope.message2 = '???'
  $scope.broadcast = () => {
    console.log('broadcasting...')
    $scope.$emit('message', 'Hello, Angularjs')
  }
  $scope.$on('message', (event, args) => {
    $scope.message2 = args;
  })
});

app.controller('Controller3', function ($scope) {
  $scope.message3 = '???'
  $scope.$on('message', (event, args) => {
    console.log('on message: ', event, args)
    $scope.message3 = args;
  })
});
