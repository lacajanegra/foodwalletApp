angular
  .module('example')
  .controller('ProfileController', function($scope, supersonic, $firebaseObject, AppService) {  
     $scope.userData = '';


    document.addEventListener("visibilitychange", onVisibilityChange, true); // cuando me posiciono en esta vista

  function onVisibilityChange() {
    steroids.view.displayLoading();
    var user_id = window.localStorage.getItem("user_id");
    var fsUserData = new Firebase('https://gyncoupons.firebaseio.com/users/' + user_id);
    $scope.userData = $firebaseObject(fsUserData);

    $scope.userData.$loaded()
      .then(function(data) {
      window.localStorage.setItem("user-name",$scope.userData.name);
      window.localStorage.setItem("user-rut",$scope.userData.rut);
      window.localStorage.setItem("user-mail",$scope.userData.mail);
      window.localStorage.setItem("user-benefits-used",$scope.userData.benefits_used);
      steroids.view.removeLoading();
    })
      .catch(function(error) {
        console.error("Error:", error);
    });
  }

  $scope.editar = function(key){
          var modalView = new supersonic.ui.View("example#edit-profile");
          var options = {
            animate: false
          }
          supersonic.ui.modal.show(modalView,options);
  };

  $scope.logout = function(){
      steroids.tabBar.selectTab(0);
      var modalView = new supersonic.ui.View("example#login");
      supersonic.ui.modal.show(modalView);
  };


  });
