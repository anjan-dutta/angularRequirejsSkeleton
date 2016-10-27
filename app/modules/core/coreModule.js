define(['modules/core/runners/runner'],function(runner){

	var coreModule = angular.module('coreModule',['ngRoute']);
	coreModule.run(runner);

	coreModule.config(function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl:"app/modules/core/templates/home.html",
				controller:"homeController"
			})
			.when("/home",{
				templateUrl:"app/modules/core/templates/home.html",
				controller:"homeController"
			});
	});

	coreModule.value('config', {
	    api_host: 'localhost',
	    api_base_url: '/code_red',
	    email: 'localhost'+'/code_red',
	});

	require(['modules/core/controllerReferences'],function(reference){
		require(reference,function(){
			angular.bootstrap(document,['coreModule']);
		});
	});

});