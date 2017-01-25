angular
  .module('example')
  .controller('CouponController', function($scope, supersonic, $firebaseObject, AppService) {
    $scope.keyBenefit = null;
  supersonic.ui.views.current.params.onValue(function(data){
  	var fsBenefitsOfBrand = new Firebase('https://gyncoupons.firebaseio.com/benefits/'+data.brandName + '/' + data.key);
    $scope.coupon = $firebaseObject(fsBenefitsOfBrand);
    $scope.brandName = data.brandName;
    $scope.brandImg = data.brandImg;
    $scope.keyBenefit = data.key;
    $scope.conditions = $scope.coupon.conditions;
    $scope.myContent= $sce.trustAsHtml(stuff.content);
    console.log( $scope.coupon);
   
  });
  $scope.okCoupon = function(key){

        var message = {
          sender: "example#utilized",
          content: "a new beer brewed"
        };

        supersonic.data.channel('public_announcements').publish(message);
        var modalView = new supersonic.ui.View("example#utilized");


        
    var options = {
      message: "Realmente quieren utilizar este cupón?",
      buttonLabels: ["Si", "No"]
    };

    supersonic.ui.dialog.confirm("Esta acción es irrevocable, seguro que deseas continuar?", options).then(function(index) {
      if (index == 0) {
        supersonic.logger.log("Usuario dijo que si");
        supersonic.ui.modal.show(modalView);

      } else {
        supersonic.logger.log("Usuario dijo que no. :(");
      }
    });

      

    

    

    };
  	//$scope.brandImg = "http://192.168.1.107:8888/grid/uploads/JuanMaestro-Share300.jpg";
    //$scope.benefits = [{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."}];
  });
