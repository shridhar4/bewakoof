/**
 * Created by Vishal on 03-06-2015.
 */
var bewakoof = angular.module("bewakoofApp", ['ui.bootstrap','ngAnimate']);
//angular.module('bewakoofApp', ['ui.bootstrap'])
bewakoof.controller('mainCtrl', function($scope,$rootScope) {
	$scope.myInterval = 5000;
	$scope.slides = [
		{
			image: 'img/bg1.jpg',
			title: 'two times chick',
			text:'Flaunt super summer styles with our raglan and 3/4 sleeve shirts!'
		},{
			image: 'img/bg3.jpg',
			title: 'Lorem Ipsum',
			text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
		},{
			image: 'img/bg4.jpg',
			title: 'Contrary popular',
			text:'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC!'
		}
	];

	/*$scope.$watch(function () {
		for (var i = 0; i < $scope.slides.length; i++) {
			if ($scope.slides[i].active) {
				return $scope.slides[i];
			}
		}
	}, function (currentSlide, previousSlide) {
		if (currentSlide !== previousSlide) {
			$scope.capt = true;
			//console.log('currentSlide:', currentSlide);
		}
	});*/
})

