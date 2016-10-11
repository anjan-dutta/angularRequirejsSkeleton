require.config({
	baseUrl:'app',
	paths:{
		'angular':'../assets/js/angular.min',
		'angular-route':'../assets/js/angular-route',
		'jquery':'../assets/js/jquery.min',
		'bootstrap':'../assets/js/bootstrap.min',
		'app':'app',
		'coreModule':'modules/core/coreModule',
		//'angular-material':'../assets/js/angular-material.min',
		//'angular-aria':'../assets/js/angular-aria.min',
		//'angular-animate':'../assets/js/angular-animate.min',
		'fullpage':'../assets/js/jquery.fullPage',
		'scroll':'../assets/js/scrolloverflow.min',
		'jquery-ui':'../assets/js/jquery-ui.min',
	},
	shim:{
		'scroll':{
			deps:['angular']
		},
		'fullpage':{
			deps:['angular','scroll']
		},
		'bootstrap':{
			deps:['jquery']
		},
		'angular':{
			exports : 'angular',
			deps:['jquery','bootstrap']
		},
		'angular-route':{
			deps:['angular']
		},
		/*'angular-animate':{
			deps:['angular']
		},
		'angular-aria':{
			deps:['angular']
		},
		'angular-material':{
			deps:['angular','angular-aria','angular-animate']
		},*/
		'coreModule':{
			deps:['angular-route','bootstrap','fullpage']
		}
	}
});

require(['coreModule'],function(){
	//angular.bootstrap(document,['app']);
});