(function(){

  angular
    .module("app")
    .factory("Resources", Resources);

    Resources.$inject=["$resource", "ipCookie"];

    function Resources($resource, ipCookie, type){

      var Resource = function(type){

        var self = this;
        self.ipCookie = ipCookie('id');

        self.service=
          $resource('/api/'+type+'/:id',{
            id:'@id'
          },{
            query::{
              method:"GET",
            }
          
          });

          return self.service;
      };

      return Resource;
    }
})();