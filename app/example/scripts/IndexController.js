angular
  .module('example')
  .controller('IndexController', function($scope, supersonic, $firebaseArray, AppService, $cookies) {  
  	steroids.view.displayLoading(); //show loading
    var fsBrands = new Firebase('https://gyncoupons.firebaseio.com/brands');
  	$scope.brands = $firebaseArray(fsBrands);
    $scope.brands.$loaded() //brand load successfully
      .then(function(data) { //hide loading
      steroids.view.removeLoading();
      })
      .catch(function(error) {
        console.error("Error:", error);
      });
    

// ======== user is logged? ========
      var ref = new Firebase('https://gyncoupons.firebaseio.com/');
      ref.onAuth(authDataCallback);
      // user is logged?
      function authDataCallback(authData) {
      if (authData) { // user is logged
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        window.localStorage.setItem("user_id",authData.uid); // guardo id
      } else { // user is not logged
        var modalView = new supersonic.ui.View("example#login");
        supersonic.ui.modal.show(modalView);
        console.log("User is logged out");
      }
    }
// ======== /end user is logged? ========
   
    $scope.loadBenefit = function(brand){
      var view = new supersonic.ui.View("example#brand-detail");
      var myParams = {params: {brandName: brand.name, brandImg: brand.logo }}; 
      supersonic.ui.layers.push(view,myParams);

    };

  });
