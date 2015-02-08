(function(){

  angular
    .module('app')
    .controller('MainController', Maincontroller)

  MainController.$inject = ['ipCookie', 'PostFactory'];

  function MainController(ipCookie, PostsFactory){

    var self = this;

    self.id = ipCookie('id');
    
    self.Post = new PostsFactory();


  }

})();