/**
 * Created by Vishal on 03-06-2015.
 */
bewakoof.directive('windowHeight', ['$window', function($window) {
	return {
		link: function(scope, elem, attrs) {
			var wh = $window.innerHeight;
			elem.css('height',wh);

			$(window).resize(function(){
				wh = $window.innerHeight;
				elem.css('height',wh);
			});


		}
	}
}]);