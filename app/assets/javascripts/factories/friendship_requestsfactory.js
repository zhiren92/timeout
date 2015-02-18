angular.module('app').factory('FRequestsFactory', FRequestsFactory);

FRequestsFactory.$inject = ['$resource','$http', 'ipCookie'];

    function FRequestsFactory($resource, $http, ipCookie){

      var FRequests = function(){
        var self = this;

        var USER_URL = "http://localhost:3000/api/users/"
        var REQUEST_URL = "http://localhost:3000/api/users/"+ ipCookie('id') +"/friendship_requests/"
        

        var Requests = $resource(REQUEST_URL);
        
        self.requestsList = requestsList();
        self.getInverseData = getInverseData();
        self.inverseRequestsList = inverseRequestsList;

        


        self.makeRequest = function(id, name){


          
          var params = {friendee_id:id , user_id:ipCookie('id'), friendee_name:name, requester_name:ipCookie('name')};
          

          $http
            .post(REQUEST_URL, params)
            .success(function(data, status, headers, config){   
            
            
       })
      }


       function requestsList(){
// Returns list of users you have requested to be friends with
          return Requests.query();
              
      }

       self.cancelRequest = function(request, id){
          $http
            .delete(REQUEST_URL + id);

          self.requestsList.splice(self.requestsList.indexOf(request), 1);
       }

       self.declineRequest = function(request, id){
          $http
            .delete(REQUEST_URL + id);

          self.inverse_request.splice(self.inverse_request.indexOf(request), 1)
       }

       var inverseRequestsList = function(data){
          self.inverse_request = data.inverse_requested
          

       }

       function getInverseData(){

          $http
            .get(USER_URL+ipCookie('id'))
            .success(function(data, status){

             inverseRequestsList(data);

            })
       }
// Closes FRequest function  
    };
    return FRequests;
// Closes Friendship Requests Factory

};
// return FRequestsFactory;
