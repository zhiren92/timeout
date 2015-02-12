(function(){

  angular
    .module('app')
    .factory('FFactory', FFactory);

    FFactory.$inject = ['$resource','$http','ipCookie'];

    function FFactory($resource,$http,ipCookie){

        var Friends = function(){

          var self = this;

          var FRIEND_URL = "http://localhost:3000/api/users/" + ipCookie('id') + "/friendships"
          
          var Friends = $resource(FRIEND_URL)

// function to create friendship from requests
          self.acceptFriend = function(name, id){
            var params ={friendee_id:id, user_id:ipCookie('id'), user_name:ipCookie('name'), friendee_name:name}

            console.log(params)

            $http
              .post(FRIEND_URL, params)
              .success(function(data, status, headers, config){

              })
          }

        };
        return Friends;
    };
  return FFactory;
})();