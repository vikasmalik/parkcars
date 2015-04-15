parking.controller("parkingCtrl", function ($scope) {
	$scope.appTitle = "EXP Parking";
	$scope.showAlert = true;
	$scope.alertTopic = "Something went wrong!";
    $scope.alertMessage = "You must inform the plate and the color of the car!";
	
	$scope.cars = [];
	$scope.colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red", "Silver"];
	
	
	$scope.closeAlert = function () {
		$scope.showAlert = false;
	};
	
	$scope.park = function (car) {
		car.entrance = new Date();
		$scope.cars.push(car);
		delete $scope.car;
	};
});