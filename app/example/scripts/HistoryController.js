angular
  .module('example')
  .controller('HistoryController', function($scope, supersonic, $firebaseArray, $firebaseObject, AppService) {  
    document.addEventListener("visibilitychange", onVisibilityChange, true); // cuando me posiciono en esta vista

  function onVisibilityChange() {
          steroids.view.displayLoading();
          var user_id = window.localStorage.getItem("user_id");
        	var utilizedStack = [];
        	var fsGenerated = new Firebase('https://gyncoupons.firebaseio.com/generated');
        	var fsSearchGenerated = '';
        	var fsBrand = '';
        	$scope.benefits= [];
        	$scope.brands = $firebaseArray(fsGenerated);
          $scope.brands.$loaded() //brand load successfully
            .then(function(data) { //hide loading
            	data.forEach(function(benefits){
            		if (benefits.uid==user_id && benefits.utilized == true) {
            			//utilizedStack.push({benefitId: benefits.benefit_id, brandName: benefits.brand_name});
            			console.log(benefits.brand_name)
            			fsBrand = new Firebase('https://gyncoupons.firebaseio.com/brands/' + benefits.brand_name);
            			//brandsGet = $firebaseObject(fsBrand);
            			//console.log(brandsGet);
            			//$scope.brandsGet;
            			fsSearchGenerated = new Firebase('https://gyncoupons.firebaseio.com/benefits/' + benefits.brand_name + '/' + benefits.benefit_id );
      	 
            			$scope.benefits.push({generated: $firebaseObject(fsSearchGenerated), brand : $firebaseObject(fsBrand), utilized_date: benefits.utilized_date });
            			steroids.view.removeLoading();
                  console.log($firebaseObject(fsSearchGenerated));
            		}else{
                  //alert("nada");
                  steroids.view.removeLoading();
                  //$scope.benefits = "hola";
                }
            	})
            
          })
            .catch(function(error) {
              console.error("Error:", error);
          });
    }      
          

  });
