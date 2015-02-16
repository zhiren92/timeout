(function(){
  angular.module("app")
    .factory("TimeFactory", TimeFactory)

  function TimeFactory(){
    var Time = function(){
      var self =  this;



      console.log(self.value)

      self.test = function(){  
      console.log(self.value)

      }   
    }
return Time;
  }
return TimeFactory;
})();