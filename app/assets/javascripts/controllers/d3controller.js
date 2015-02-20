angular
  .module('app')
  .controller('d3Controller', d3Controller)

d3Controller.$inject=["ipCookie"]

function d3Controller(ipCookie){
    var self = this;

    self.showTime = showTime();

    function showTime(){


      var USER_URL = "http://localhost:3000/api/users/" + ipCookie('id');
      d3.json(USER_URL, function(error,json){
        if (error) return console.warn(error);

        
        var available_times = json.available_times;

        
        


        var svgSquare = d3.select('#self_time')
                    .append('svg')
                    .attr("width", 500)
                    .attr("height", 500)
        
        function convert(start, end){
          var beg = new Date(start.start_time);
          var back = new Date(end.end_time);
          var result = back - beg;
          
          return result/999900;
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
          for(var i = 0; i<available_times.length;i++){
            console.log(available_times[i].start_time);
            d3.select('svg')
              .append('circle')
               .attr('class', 'circle')
               .attr('data-time', new Date(available_times[i].start_time))
               .attr('cx', Math.random()*400)        
               .attr('cy', Math.random()*400)
               .attr('r', convert(available_times[i], available_times[i]))
               .attr("fill",getRandomColor)
              .transition().duration(5000)
               .attr('cx', Math.random()*400)        
               .attr('cy', Math.random()*400)
               .attr("fill",getRandomColor)
              .transition().duration(5000)
               .attr('cx', Math.random()*400)        
               .attr('cy', Math.random()*400)
               .attr("fill",getRandomColor)   
              .transition().duration(5000)
               .attr('cx', Math.random()*400)        
               .attr('cy', Math.random()*400)
               .attr("fill",getRandomColor)  
          }
        
        
      });
    }

        // d3.select('.cricle')
        //   .on('mouseover', )

}