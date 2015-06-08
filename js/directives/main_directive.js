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

bewakoof.directive('ddSelectImg', function() {
	return {
		link: function(scope, elem, attrs) {
			var src = elem.find('li');
			src.mouseenter(function(){
					var img= $(this).attr('isource')
					console.log(img);
					scope.imgclass= "dd-img-"+img;
					scope.$apply();
				}
			);
		}
	}
});

bewakoof.directive('parallaX', function() {
	return {
		link: function(scope, elem, attrs) {
			var atr =  scope.$eval(attrs.parallaX);
			elem.parallax(atr.xpos,atr.speed)
		}
	}
});

bewakoof.directive('checkScrollTop', ['$window', function($window) {
	return {
		link: function(scope, elem, attrs) {
			var st = $(window).scrollTop();
			st = $(window).scrollTop();
			if(st>80) {
				scope.istop = false;
				//scope.$apply();
			}
			else{
				scope.istop = true;
				//scope.$apply();
			}

			$(window).scroll(function(){
				st = $(window).scrollTop();
				if(st>80) {
					scope.istop = false;
					scope.$apply();
				}
				else{
					scope.istop = true;
					scope.$apply();
				}
			});


		}
	}
}]);