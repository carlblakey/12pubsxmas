//Create a new Vue instance
new Vue({
el: '.app',
data() {
return {
todoList: [
{"id":0,"title":"1. The Dubliner West Portal","done":false,"location":"328 W Portal Ave, San Francisco, CA 94127", "map":'https://goo.gl/maps/WQhxSxca1cgE1wcs8', "image":'pub-01.jpg', "distance":"0.3 miles, 6 mins", "contact":"(415) 566-9444", "quote":"An intelligent man is sometimes forced to be drunk to spend time with his fools.", "author":"Ernest Hemingway"},

{"id":1,"title":"2. Philosopher's Club","done":false,"location":"824 Ulloa St, San Francisco, CA 94127", "map":'https://goo.gl/maps/6M5TxqoxR59gvFMu5', "image":'pub-02.jpg', "distance":"0.7 mils, 16 mins", "contact":"(415) 753-0599", "quote":"Work is the curse of the drinking classes.", "author":"― Oscar Wilde"},

{"id":2,"title":"3. Shannon Arms","done":false,"location":"915 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/Y8Vb8JH7xmDgb4So8', "image":'pub-03.jpg', "distance":"0.3 miles, 5 mins", "contact":"(415) 665-1223", "quote":"The problem with the world is that everyone is a few drinks behind.", "author":"― Humphrey Bogart"},

{"id":3,"title":"4. Karl's Beacon","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://g.page/karlsbeaconbar?share', "image":'pub-04.jpg', "distance":"0.6 miles, 10 mins", "contact":"(415) 592-9703", "quote":"Time is never wasted when you're wasted all the time.", "author":"― Catherine Zandonella"},

{"id":4,"title":"5. The Four Deuces","done":false,"location":"2319 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/pPV9Xm4WHvgFWEdP8', "image":'pub-05.jpg', "distance":"0.8 miles, 14 mins", "contact":"(415) 566-9122", "quote":"You're not drunk if you can lie on the floor without holding on.", "author":"― Dean Martin"},

{"id":5,"title":"6. The Riptide","done":false,"location":"3639 Taraval St, San Francisco, CA 94116", "map":'https://g.page/michaelcollinshaight?share', "image":'pub-06.jpg', "distance":"Too far, Uber time to Kezar!", "contact":"(415) 681-8433", "quote":"I feel sorry for people who don't drink. When they wake up in the morning, That's as good as they're going to feel all day.", "author":"― Frank Sinatra"},

{"id":6,"title":"7. Kezar Pub (Wings)","done":false,"location":"770 Stanyan St, San Francisco, CA 94117", "map":'https://g.page/karlsbeaconbar?share', "image":'pub-5.jpg', "distance":"0.8 miles, 17 mins", "contact":"(415) 386-9292", "quote":"Fermentation may have been a better invention than fire.", "author":"― David Rains Wallace"},

{"id":7,"title":"8. The Little Shamrock","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://goo.gl/maps/3BXSkJzb3KR74xuy6', "image":'pub-4.jpg', "distance":"0.2 miles, 4 mins", "contact":"(415) 661-0060", "quote":"A bottle of beer contains more philosophy than all the books in the world.", "author":"― Louis Pasteur"},

{"id":8,"title":"9. Blackthorn Tavern","done":false,"location":"834 Irving St, San Francisco, CA 94122", "map":'https://goo.gl/maps/2UitTz1sUPzsZPG77', "image":'pub-2.jpg',"distance":"Too far, Uber time to the Plough & the Stars!", "contact":"(415) 564-6626", "quote":"Homer no function beer well without.", "author":"- Homer Simpson"},

{"id":9,"title":"10. The Plough and the Stars","done":false,"location":"116 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/MMv6oGqZvc2mm9299', "image":'pub-11.jpg', "distance":"0.2 miles, 4 mins", "contact":"(415) 751-1122", "quote":"Beer's intellectual. What a shame so many idiots drink it.", "author":"― Ray Bradbury",},

{"id":10,"title":"11. Ireland's 32","done":false,"location":"3920 Geary Blvd, San Francisco, CA 94118", "map":'https://goo.gl/maps/MMv6oGqZvc2mm9299', "image":'pub-011.jpg', "distance":"0.3 miles, 5 mins", "contact":"(415) 386-6173", "quote":"There are more old drunks than there are old doctors.", "author":"- Willie Nelson"},

{"id":11,"title":"12. The Bitter End","done":false,"location":"441 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/fkx1EKaceZhWmvcB9', "image":'pub-12.jpg', "distance":"Go home - You're drunk!", "contact":"(415) 221-9538", "quote":"A drunk man’s words are a sober man’s thoughts.", "author":"- Steve Fergosi"},

],

new_todo: '',
showComplete: true,
};
},
computed: {},
mounted() {
this.getTodos();
},
watch: {
todoList: {
handler: function(updatedList) {
localStorage.setItem('todo_list', JSON.stringify(updatedList));
},
deep: true
}
},
computed:{
pending: function() {
return this.todoList.filter(function(item) {
return !item.done;
})
},
completed: function() {
return this.todoList.filter(function(item) {
return item.done;
}); 
},
completedPercentage: function() {
return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
},
today: function() {
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
  dd = '0'+dd
} 

if(mm<10) {
  mm = '0'+mm
} 

today = {
day: weekday[today.getDay()],
date:  mm + '-' + dd + '-' + yyyy,
}

return(today);
}
},
methods: {
// get all todos when loading the page
getTodos() {
if (localStorage.getItem('todo_list')) {
this.todoList = JSON.parse(localStorage.getItem('todo_list'));
}
},
// add a new item
addItem() {
// validation check
if (this.new_todo) {
this.todoList.unshift({
  id: this.todoList.length,
  title: this.new_todo,
  done: false,
});
}
// reset new_todo
this.new_todo = '';
// save the new item in localstorage
return true;
},
deleteItem(item) {
this.todoList.splice(this.todoList.indexOf(item), 1);
},
toggleShowComplete() {
this.showComplete = !this.showComplete;
},
clearAll() {
this.todoList = [];
}
},
});

// smooth scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Modal Window
var globalModal = $('.global-modal');
    $( ".btn-green-flat-trigger" ).on( "click", function(e) {
      e.preventDefault();
      $( globalModal ).toggleClass('global-modal-show');
    });
    $( ".overlay" ).on( "click", function() {
      $( globalModal ).toggleClass('global-modal-show');
    });
    $( ".global-modal_close" ).on( "click", function() {
      $( globalModal ).toggleClass('global-modal-show');
    });
    $(".mobile-close").on("click", function(){
      $( globalModal ).toggleClass('global-modal-show');
    });


    // show hide
    $('.Show').click(function() {
      $('#target').show(500);
      $('.Show').hide(0);
      $('.Hide').show(0);
  });
  $('.Hide').click(function() {
      $('#target').hide(500);
      $('.Show').show(0);
      $('.Hide').hide(0);
  });
  $('.toggle').click(function() {
      $('#target').toggle('slow');
  });




  /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/* Scroll to top when arrow up clicked END */

