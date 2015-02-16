(function(){

  angular
    .module('app')
    .controller('MainController', MainController)

  MainController.$inject = ['ipCookie', 'FFactory', 'FRequestsFactory', '$http', '$resource', 'TimeFactory'];

  function MainController(ipCookie, FFactory, FRequestsFactory, $http, $resource, TimeFactory){
// capture for MainController
    var self = this;

// call to retreive all Users data
    var Friends = $resource(
      "http://localhost:3000/api/users/:id",
      {id:"@id"},
      {not_friends:{method:'GET', 
                    isArray:true,
                    params:{user_id:ipCookie('id')}, 
                    url:'http://localhost:3000/api/users/not_friends',
                  }
                });

    

// Friend Request Factory
    self.FRequests = new FRequestsFactory();

// Friend Factory
    self.Friends = new FFactory();    

// Currently a list of all users
    self.friendsList = friendsList();

    
    

// returns the list of Users currently
    function friendsList(){
      return Friends.not_friends();
    }

    
// closes main controller function
}

})();