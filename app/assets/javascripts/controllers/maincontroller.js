(function(){

  angular
    .module('app')
    .controller('MainController', MainController)

  MainController.$inject = ['ipCookie', 'FRequestsFactory','$http', '$resource'];

  function MainController(ipCookie, FRequestsFactory, $http, $resource){
// capture for MainController
    var self = this;

// call to retreive all Users data
    var Friends = $resource(
      "http://localhost:3000/api/users/:id",
      {id:"@id"});

    self.id = ipCookie('id');

// Friend Request Factory
    self.FRequests = new FRequestsFactory();

// Currently a list of all users
    self.friendsList = friendsList();




// returns the list of Users currently
    function friendsList(){
      return Friends.query();
    }

    
// closes main controller function
}

})();