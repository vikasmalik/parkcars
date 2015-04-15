parking.directive("alert", function () {
	return {
		restrict: 'E',
		scope: {
			topic: '=topic',
			description: '=description',
			close: '&close'
		},
		templateUrl: "alert.html",
		replace: true,
		transclude: true
	};
});

<!--  if the name of the directive's scope property is the same as of the expression, we can keep just the prefix. By convention, the framework will consider
the name to be the identical to the scope property name.  
	scope: {
			topic: '=',
			description: '=',
			close: '&'
	},
-->