//Create a new Vue instance
new Vue({
el: '.app',
data() {
return {
todoList: [

{"id":0,"title":"1. The Dubliner West Portal","done":false,"location":"328 W Portal Ave, San Francisco, CA 94127", "map":'https://goo.gl/maps/WQhxSxca1cgE1wcs8', "image":'pub-001.jpg', "distance":"0.3 miles, 6 mins", "contact":"(415) 566-9444", "quote":"Dear Alcohol, we had a deal that you would make me prettier, funnier and a better dancer. I saw the video, we need to talk."},

{"id":1,"title":"2. McCarthy's Irish Bar","done":false,"location":"46 West Portal Ave, San Francisco, CA  94127", "map":'https://goo.gl/maps/jdqSXVLN9ZCZ1JGH7', "image":'pub-002.jpg', "distance":"394 ft, 2 mins", "contact":"(415) 702-6227", "quote":"I drink alcohol to drown my problems, unfortunately my problems are damn good swimmers."},

{"id":2,"title":"3. Philosopher's Club","done":false,"location":"824 Ulloa St, San Francisco, CA 94127", "map":'https://goo.gl/maps/6M5TxqoxR59gvFMu5', "image":'pub-003.jpg', "distance":"0.7 miles, 16 mins", "contact":"(415) 753-0599", "quote":"My doctor told me to watch my drinking, so I’m off to find a bar with a mirror."},

{"id":3,"title":"4. Shannon Arms","done":false,"location":"915 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/Y8Vb8JH7xmDgb4So8', "image":'pub-004.jpg', "distance":"0.3 miles, 5 mins", "contact":"(415) 665-1223", "quote":"Will cocktails be served at your daughter's princess party or shall I tailgate in your driveway?"},

{"id":4,"title":"5. Karl's Beacon","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://g.page/karlsbeaconbar?share', "image":'pub-005.jpg', "distance":"0.3 miles, 6 mins", "contact":"(415) 592-9703", "quote":"I read an article that said if you drink every day you might be an alcoholic… thank God I only drink every night."},

{"id":5,"title":"6. O'Brien's","done":false,"location":"1940 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/1HG8vcK43v2BtR6y7', "image":'pub-006.jpg', "distance":"0.2 miles, 4 mins", "contact":"(415) 731-8900", "quote":"I’m not as think as you drunk I am."},

{"id":6,"title":"7. The Four Deuces","done":false,"location":"2319 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/pPV9Xm4WHvgFWEdP8', "image":'pub-007.jpg', "distance":"0.8 miles, 14 mins", "contact":"(415) 566-9122", "quote":"Life is not a fairy tale, if you lose a shoe at midnight, you're drunk."},

{"id":7,"title":"8. The Riptide","done":false,"location":"3639 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/cssMXiT4wxoEX4ym9', "image":'pub-06.jpg', "distance":"Too far, Uber time to The Plough & Stars!", "contact":"(415) 681-8433", "quote":"If at first you don't succeed, try drinking a beer while you do it. You'll be amazed at how much less you care."},

{"id":8,"title":"9. The Plough and the Stars","done":false,"location":"116 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/MMv6oGqZvc2mm9299', "image":'pub-11.jpg', "distance":"0.1 miles, 2 mins", "contact":"(415) 751-1122", "quote":"Spilling a beer is the adult equivalent to losing a balloon.",},

{"id":9,"title":"10. Ireland's 32","done":false,"location":"3920 Geary Blvd, San Francisco, CA 94118", "map":'https://goo.gl/maps/QRR8Mt2f5f5giFNg6', "image":'pub-011.jpg', "distance":"0.1 miles, 1 mins", "contact":"(415) 386-6173", "quote":"Alcohol does not make you fat, it makes you lean: against tables, chairs, walls, floors and ugly people."},

{"id":10,"title":"11. The Abbey Tavern","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://goo.gl/maps/ZhwPzx3p6rk1Y2GRA', "image":'pub-0011.jpg', "distance":"0.2 miles, 4 mins", "contact":"(415) 661-0060", "quote":"My boss didn’t know I drank, till one day I came to work sober."},

{"id":11,"title":"12. The Bitter End","done":false,"location":"441 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/fkx1EKaceZhWmvcB9', "image":'pub-0012.jpg', "distance":"Go home - You're drunk!", "contact":"(415) 221-9538", "quote":"I know I should give up drinking but I am not a quitter."},
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

