// (function(){
angular.module("app").factory("TimeFactory", TimeFactory)

TimeFactory.$inject= ["$http", "ipCookie"]

  function TimeFactory($http,ipCookie){
    var Time = function(){
      var self =  this;

      var TIME_URL = "http://localhost:3000/api/users/"+ipCookie('id')+"/available_times";
      var USER_URL = "http://localhost:3000/api/users/" + ipCookie('id');

      self.getAvailableTimeData = getAvailableTimeData();
      self.availableTimesList = availableTimesList;
      self.overlapTimeList = overlapTimeList;
      self.getOverlapData = getOverlapData();

      self.startTime = function(){ 
  // the value of the datetime selector start time
        var start= new Date($("#start").val()).toISOString();
  // the value of the datetime selector end time
        var end= new Date($("#end").val()).toISOString();
 
        var params = {user_id:ipCookie('id'), start_time:start, end_time:end};


        $http
          .post(TIME_URL, params)
          .success(function(response){
            console.log("success");
            setTimeout(function(){
              $(document.span).append('Availability Successful');
            });
          
          })

    

        }   

      var availableTimesList = function(data){
        var startArr = [];
        var endArr = [];
        for(var i=0; i<data.length; i++){
          var d = new Date(data[i].start_time)
          var e = new Date(data[i].end_time)
          startArr.push(d)
          endArr.push(e)

        }



        self.start_times = startArr;
        self.end_times = endArr;
        // console.log(self.start_times)
      }

      function getAvailableTimeData(){

        $http
          .get(TIME_URL)
          .success(function(data){

            availableTimesList(data);


 
          })
      }

      var overlapTimeList = function(data){
        // console.log(data.overlap_ranges);
        self.overlap_list = data.overlap_ranges
        console.log(self.overlap_time);


        
      }

      function getOverlapData(){
      

        $http
          .get(USER_URL)
          .success(function(data){
            overlapTimeList(data);
          })
      }
    }
return Time;
  }
// return TimeFactory;
// })();