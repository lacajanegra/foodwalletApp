angular
  .module('example')
  .controller('UtilizedController', function($scope, supersonic, $firebaseObject, AppService) {  
    supersonic.ui.views.current.whenVisible( function(){
      // date
        var date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        date = day + '/' + monthIndex + '/' + year;
        
      // end date


       var user_id = window.localStorage.getItem("user_id");
       //alert(value);
        var key = steroids.view.params.id;
        var brandName = steroids.view.params.brandName;
        var fsBenefitsOfBrand = new Firebase('https://gyncoupons.firebaseio.com/benefits/'+ brandName + '/' + key);
        var fsAddGenerated = new Firebase('https://gyncoupons.firebaseio.com/generated/');
        $scope.coupon = $firebaseObject(fsBenefitsOfBrand);
        
        // get user
        var fsUser = new Firebase('https://gyncoupons.firebaseio.com/users/' + user_id);
        $scope.user = $firebaseObject(fsUser);
        // get user


        $scope.preHashCode = obtainHashCode(user_id+key);

        $scope.isGenerated = $firebaseObject(fsAddGenerated.child($scope.preHashCode));
        $scope.isGenerated.$loaded() //brand load successfully
          .then(function(data) { //hide loading
            if (data.benefit_id == null) {
              
              fsAddGenerated.child($scope.preHashCode).set({utilized:false, uid:user_id, benefit_id:key, brand_name:brandName ,generated_date:date});
              $scope.hashCode =  $scope.preHashCode;
            }else{
              if (data.utilized != false){
                $scope.hashCode = "Beneficio utilizado";
              }else{
                $scope.hashCode =  $scope.preHashCode;
              }
            }
          })
          .catch(function(error) {
            console.error("Error:", error);
          });
        //
        //

    });

    function obtainHashCode(string){
       var hash = 0;
        if (string.length == 0) return hash;
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          hash = ((hash<<5)-hash)+char;
          hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    $scope.listo = function(){
      supersonic.ui.modal.hide();
    }

  });

