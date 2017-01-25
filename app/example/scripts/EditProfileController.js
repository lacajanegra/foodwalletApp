angular
  .module('example')
  .controller('EditProfileController', function($scope, supersonic, $firebaseObject, AppService) {  
      $scope.userName = window.localStorage.getItem("user-name");
      $scope.userRut = window.localStorage.getItem("user-rut");
      $scope.userMail = window.localStorage.getItem("user-mail");

    $scope.listo = function(){
      supersonic.ui.modal.hide();
    }
  });
