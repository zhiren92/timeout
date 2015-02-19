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
      self.compareTime = compareTime;

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
        // console.log(data.overlap_ranges)
        // console.log(moment(data.overlap_ranges[0][0]).toDate());

        self.overlap_list = data.overlap_ranges

        // console.log(data)

        // console.log(data.overlap[0])
      }

      function getOverlapData(){
      

        $http
          .get(USER_URL)
          .success(function(data){
            overlapTimeList(data);
          })
      }

      self.compare = function(){
        var clock = new Date($("#timer").val()).toISOString();

        // console.log(clock);
        $http
          .get(USER_URL)
          .success(function(data){
           

            self.intersect_times = compareTime(clock,data.overlap_ranges);
            // console.log(clock)
            // console.log(data.overlap_ranges)

          })
        
      }

      var compareTime = function(datetime, date_range_arr){
        // console.log(date_range_arr);


        var date_check_arr = [];
        // console.log(date_check_arr);
          for(var i=0;i<date_range_arr.length;i++){
            // console.log(datetime>date_range_arr[i][0])
            // console.log(datetime==date_range_arr[i][1])
            if(datetime >= date_range_arr[i][0] && datetime < date_range_arr[i][1]){
              date_check_arr.push(date_range_arr[i]);
              // console.log(date_check_arr);
            }

          }
        
        return date_check_arr
        
      }

      
    }
return Time;
  }
// return TimeFactory;
// })();