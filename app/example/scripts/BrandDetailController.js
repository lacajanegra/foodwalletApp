angular
  .module('example')
  .controller('BrandDetailController', function($scope, supersonic, $firebaseArray, AppService) {
    steroids.view.displayLoading(); //show loading
    $scope.brandName = "";
    supersonic.ui.views.current.params.onValue(function(data){
    var fsBenefitsOfBrand = new Firebase('https://gyncoupons.firebaseio.com/benefits/'+data.brandName);
    $scope.benefits = $firebaseArray(fsBenefitsOfBrand);
    $scope.benefits.$loaded() //benefits load successfully
      .then(function(data) { //hide loading
      steroids.view.removeLoading();
      })
      .catch(function(error) {
        console.error("Error:", error);
      });

    $scope.brandName = data.brandName;
    $scope.brandImg = data.brandImg;
    console.log( $scope.benefits );
    });
        $scope.loadCoupon = function(key, brandName, brandImg){



      var view = new supersonic.ui.View("example#coupon-detail");
      var myParams = {params: {key: key, brandName: brandName, brandImg: brandImg}}; 
      supersonic.ui.layers.push(view,myParams);

    

    

    };
      $scope.okCoupon = function(key){

        var message = {
          sender: "example#utilized",
          content: "a new beer brewed"
        };

        supersonic.data.channel('public_announcements').publish(message);
        var modalView = new supersonic.ui.View("example#utilized");


        supersonic.ui.modal.show(modalView);
    // var options = {
    //   message: "Por favor, contesta con seguridad",
    //   buttonLabels: ["Si", "No"]
    // };

    // supersonic.ui.dialog.confirm("Esta acción es irrevocable, seguro que deseas continuar?", options).then(function(index) {
    //   if (index == 0) {
    //     supersonic.logger.log("Usuario dijo que si");

    //   } else {
    //     supersonic.logger.log("Usuario dijo que no. :(");
    //   }
    // });

      

    

    

    };
  	//$scope.brandImg = "http://192.168.1.107:8888/grid/uploads/JuanMaestro-Share300.jpg";
    //$scope.benefits = [{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."},{name: 'BBQ Chicken Sandwich', img:'http://192.168.1.107:8888/grid/uploads/APP-06.jpg', review: "Jugosa pechuga de pollo grillada a la parrilla, bañada en salsa BBQ, cubierta con queso mozzarela, tocino horneado, lechuga, tomate, aros de cebolla morada y mayonesa. Todo en pan de baguette tostado con mantequilla de ajo."}];
  });
