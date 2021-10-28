/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			
		});

})(jQuery);

$('li').click(function() {
  $(this).siblings().find('a').removeClass('focus');
  $(this).find('a').addClass('focus');
});

//Create a new Vue instance
var app = new Vue({

    //Bind Vue instance to #app element
    el: "#app",

    //Register data for instance
    data: {
        newTask: "",
        //A counter is used to ensure strikeout animations aren't repeated unnecessarily
        counter: 7,
        //Example values
        taskList: [
            {
                text: "Durty Nelly’s",
                checked: false,
                starred: true,
                id: 1
            },
            {
                text: "Blackthorn Tavern",
                 checked: false,
                starred: true,
                id: 2
            },
            {
                text: "Mucky Duck",
                 checked: false,
                starred: true,
                id: 3
            },
            {
                text: "The Little Shamrock",
                 checked: false,
                starred: true,
                id: 4
            },
            {
                text: "Kezar Pub (Wings!)",
                 checked: false,
                starred: true,
                id: 5
            },
            {
                text: "Irish Bank",
                 checked: false,
                starred: true,
                id: 6
            },
			{
                text: "Kells",
                 checked: false,
                starred: true,
                id: 7
            },
            {
                text: "Maggie’s",
                checked: false,
                starred: true,
                id: 8
            },
            {
                text: "Plough And The Stars",
                 checked: false,
                starred: true,
                id: 9
            },
            {
                text: "Ireland’s 32",
                 checked: false,
                starred: true,
                id: 10
            },
            {
                text: "Abbey Tavern",
                 checked: false,
                starred: true,
                id: 11
            },
            {
                text: "The Bitter End",
                 checked: false,
                starred: true,
                id: 12
            }
        ],
        activeList: [],
        loaded: false
    },

    //Derived data
    computed: {
        taskCount: function () {
            return this.taskList.length;
        },
        checkCount: function () {
            return this.checkedList.length
        },
        areAllChecked: function() {
            //Check if every checked property returns true and if there is at least one to-do item
            return this.taskList.every(function(task) {
                return task.checked;
            }) && this.taskList.length > 0;
        },
        checkedList: function () {
            return this.taskList.filter(function (self) {
                return self.checked;
            })
        },
        uncheckedList: function () {
            return this.taskList.filter(function (self) {
                return !self.checked;
            })
        },
        starredList: function () {
            return this.taskList.filter(function (self) {
                return self.starred;
            })
        }
        
    },

    //This is where we will hold the methods we want to use in our application
    methods: {
        queryList: function (list) {
            return this.activeList === list;
        },
        addTask: function () {
            //Remove whitespace from start and end
            var task = this.newTask.trim();

            if (task) {
                //Add new a task to the start of the task list
                this.taskList.push({
                    text: task,
                    checked: false,
                    id: this.counter
                });
                this.counter++;
            }

            this.newTask = "";
        },
        removeTask: function (task) {
            var index = this.taskList.indexOf(task); 
            this.taskList.splice(index, 1);
        },

        removeChecked: function () {
            this.taskList = this.taskList.filter(function (self) {
                return self.checked === false;
            })
            this.activeList = this.taskList;
        },

        
        clearList: function() {
            //Setting taskList to an empty array clears the whole list
            this.taskList = [];
        }
    }
});

app.activeList = app.taskList;
app.loaded = true;

