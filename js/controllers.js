parking.controller("parkingCtrl", function ($scope) {
	$scope.appTitle = "[EXP] Parking";
	$scope.cars = [];
	$scope.colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red", "Silver"];
	
	$scope.park = function (car) {
		car.entrance = new Date();
		$scope.cars.push(car);
		delete $scope.car;
	};
});