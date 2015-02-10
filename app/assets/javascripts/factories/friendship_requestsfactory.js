(function(){
  angular
    .module('app')
    .factory('FRequestsFactory', FRequestsFactory);

    FRequestsFactory.$inject = ['Resources','$http'];

    function FRequestsFactory(Resources, $http){

      var FRequests = function(){
        var self = this;
        var FRIEND_URL = "http://localhost:3000/api/users/"
        var REQUEST_URL = "http://localhost:3000/api/friendship_requests/"

        self.makeRequest = makeRequest;

        function makeRequest(){

          console.log("clicked")

          $http
            .get(FRIEND_URL)
            .success(function(data, status, headers, config){
              console.log(data[0].id)
          


          $http
            .post(REQUEST_URL, params)
            .success(function(data, status, headers, config){

            })

      });



// Closes FRequest function
    }

// Closes Friendship Requests Factory
    };
    return FRequests;

}
return FRequestsFactory;
})();