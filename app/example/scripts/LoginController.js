angular
  .module('example')
  .controller('LoginController', function($scope, $q, supersonic, $firebaseArray, AppService, $firebaseAuth, $cookies) {
    var initSession = $q.defer();

    initSession.promise.then(usrASession);

    function usrASession(usr){

    }
    $scope.login = function(){

      var ref = new Firebase('https://gyncoupons.firebaseio.com/');
      ref.authWithPassword({
        email    : $scope.user.username,
        password : $scope.user.pass
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
                var options = {
                animate: true
                }

                supersonic.ui.modal.hide(options);
                window.localStorage.setItem("user_id",authData.uid);

        }
      });
      $scope.auth = $firebaseAuth(ref);
     
  
    };
    $scope.usrConnected = {nombre: "", mail: "" , isConnected:""};
  
  });
