(function(){
  angular.module("app")
    .factory("TimeFactory", TimeFactory)

  TimeFactory.$inject= ["$http", "ipCookie"]

  function TimeFactory($http,ipCookie){
    var Time = function(){
      var self =  this;


      self.startTime = function(){ 
  // the value of the datetime selector start time
      var start= $("#time").val();
  // 
      var params = {user_id:ipCookie('id'), start_time:start};
      var TIME_URL = "https://localhost:3000/"+ipCookie('id')+"/available_times";

      console.log(TIME_URL)
      console.log(params)

      // $http
      //   .post(TIME_URL, params)
      //   .success(function(response){
      //     console.log("success");
      //     console.log(response)
      //   })

      console.log(start);

      }   
    }
return Time;
  }
return TimeFactory;
})();