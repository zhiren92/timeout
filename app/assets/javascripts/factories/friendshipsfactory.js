angular.module('app').factory('FFactory', FFactory);

FFactory.$inject = ['$resource','$http','ipCookie'];

    function FFactory($resource,$http,ipCookie){

        var Friends = function(){

          var self = this;

          var FRIEND_URL = "http://localhost:3000/api/users/" + ipCookie('id') + "/friendships/";
          


          self.FriendsList = FriendsList;

          self.getFriendsList = getFriendsList();
          
          

          var FriendsList = function(data){
            
            self.friends = data.friendships

          }

          function getFriendsList(){
            var USER_URL = "http://localhost:3000/api/users/" + ipCookie('id');
            
            $http
              .get(USER_URL)
              .success(function(data, status){
                FriendsList(data);
                

              })

          }

// function to create friendship from requests
          self.acceptFriend = function(name, id){

            
            // var INV_FRIEND_URL = "http://localhost:3000/api/users/" + id + "/friendships"

            var params ={friendee_id:id, user_id:ipCookie('id'), user_name:ipCookie('name'), friendee_name:name}
            // var inv_params = {friendee_id:ipCookie('id'), user_id:id, user_name:name, friendee_name:ipCookie('name')}



            $http
              .post(FRIEND_URL, params)
              .success(function(data, status, headers, config){

              })            
          //   $http
          //     .post(INV_FRIEND_URL, inv_params)
          //     .success(function(data, status, headers, config){

          //     })
          }

           self.declineFriend = function(id){
            
            $http
              .delete(FRIEND_URL+"/"+id)
              .success(function(data, header, status){
                
              })

  
          }
            self.unFriend = function(friend, id, friendeeID){
              // var INV_FRD_URL = "http://localhost:3000/api/users/" + friendeeID + "/friendships/" + 
              // var params = {friendee_id:ipCookie('id') , user_id:friendeeID}
              $http
                .delete(FRIEND_URL+id)
                .success(function(){
                })
              // console.log(INV_FRD_URL) 
              // console.log(params)             

              // $http
              //   .delete(INV_FRD_URL, params)
              //   .success(function(){
              //     console.log("SUCCESS")
              //   })


              // self.friends.splice(self.friends.indexOf(friend), 1)
            }
        };
        return Friends;
    };
  // return FFactory;
