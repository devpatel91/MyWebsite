app.controller('contactCtrl', function($scope, $http) {
    $scope.submit = function() {
        $scope.showForm = true;
        $scope.successMessage = false;
        var data = {
            name: $scope.name,
            email: $scope.email,
            message: $scope.message
        }
        return $http.post('/', data)
            .then(function(response) {
              console.log(response.data)
            })
    }
})
