angular
  .module('example')
  .factory('AppService', function($rootScope) {
    var factory = {};
    var BrandActual = "";

    return{
      getActualBrand : function(){
        return BrandActual;
      },
      setActualBrand : function(actualBrand){
        BrandActual = actualBrand;
        //alert(BrandActual);
        return BrandActual;
      }
    }

  });



// angular
//   .module('example')
//   .factory('AppService', function($rootScope) {
//   	var factory = {};

//   	//factory.ActualBrandName = "sadads";

//   	factory.setActualBrand = function (brandName){
  		
//   		this.ActualBrandName = brandName;
//       //alert(this.ActualBrandName);
//   		this.broadcastItem();
//   	};
//   	factory.getActualBrand = function (){
//   		//return "oli";
//       alert(this.ActualBrandName);
//   		return this.ActualBrandName;
//   	};

//   	factory.broadcastItem = function (){
// 		$rootScope.$broadcast('handleBroadcast');
//   	};

//   	return factory;

//   });
// BrandDetailController.$inject = ['$scope' , 'AppService'] ; 
// IndexDetailController.$inject = ['$scope' , 'AppService'] ; 