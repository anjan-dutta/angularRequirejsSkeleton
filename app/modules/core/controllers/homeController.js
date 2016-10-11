define(function(){

	var coreModule = angular.module('coreModule');

	coreModule.controller('homeController',['$scope','$timeout','$log','config','$location','$anchorScroll',function($scope,$timeout,$log,config,$location,$anchorScroll){
		
    $log.info(config.api_host);
		
    if (typeof $.fn.fullpage.destroy == 'function') { 
        $.fn.fullpage.destroy('all');
    }
      	$timeout(function(){
      		$('#fullpage').off().fullpage({
            sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            //menu: '#myMenu'
          });
      	},0,true);
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        }
	}]).directive('simpleSlider',function(){
    return{
      restrict:'E',
      replace:true,
      transclude: true,
      templateUrl:'app/modules/core/templates/slider.html'
    };
  });
});