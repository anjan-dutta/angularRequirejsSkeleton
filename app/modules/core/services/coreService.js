
angular.module('coreModule')
.service('coreService', ['$http','$rootScope',function($http,$rootScope) {
    
    

    return {
        getData: function(data) {
 
           $rootScope.term = data.qData;
        	 
        	 portList = ''; 
        	
        	 return $http({
        		url: 'http://localhost/posturl',
        	        method: "POST",
        	        data: $.param({ 'qDATA' :'data'}),
        	        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
        	    })
        	    .then(function(response) { 
        	    	    List =  response.data.data.data;
        	    	    
        	    	    return List;
        	    });
       
        }

    };
}]);