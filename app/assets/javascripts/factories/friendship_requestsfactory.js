(function(){
  angular
    .module('app')
    .factory('FRequestsFactory', FRequestsFactory);

    FRequestsFactory.$inject = ['$resource','$http', 'ipCookie'];

    function FRequestsFactory($resource, $http, ipCookie){

      var FRequests = function(){
        var self = this;
        var FRIEND_URL = "http://localhost:3000/api/users/"
        var REQUEST_URL = "http://localhost:3000/api/users/"+ ipCookie('id') +"/friendship_requests/"
        var Requests = $resource(REQUEST_URL);
        console.log(Requests.query())


        self.makeRequest = makeRequest;
        self.requestsList = requestsList();
        self.cancelRequest = cancelRequest;

        console.log(ipCookie('id'))
        function makeRequest(id, name){


          
          var params = {friendee_id:id , user_id:ipCookie('id'), friendee_name:name};
          console.log(params);

          $http
            .post(REQUEST_URL, params)
            .success(function(data, status, headers, config){   
            
       })
      }


       function requestsList(){
// Returns list of users you have requested to be friends with
          return Requests.query();
              
      }

       function cancelRequest(request, index){
          $http
           .
       }
// Closes FRequest function  
    };
    return FRequests;
// Closes Friendship Requests Factory

};
return FRequestsFactory;
})();