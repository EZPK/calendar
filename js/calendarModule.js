// Create calendar Module

var Calendar = (function() {


    //private
    var _domHandler = function() {

        return {
            getCards: function() {
                var cards = document.querySelectorAll(".card");
                return cards;
            },
            front: function() {
                var front = document.querySelectorAll(".front");
                return front;
            },
            back: function() {
                var back = document.querySelectorAll(".back")
                return back;
            }
        }

    };

    // private
    var _addClassFlip = function(arg) {
        arg.addEventListener('click', function() {
            if (arg.getAttribute('class') == 'card') {
                var classAttr = arg.getAttribute('class');
                classAttr += " flip";
                arg.setAttribute('class', classAttr)
            } else {
                arg.setAttribute('class', 'card');
            }
        })
    }

    var _addFrontBackToCards = function(arg) {
        var front = document.createElement('div');
        var back = document.createElement('div');
        front.setAttribute('class', 'front');
        back.setAttribute('class', 'back');

        arg.appendChild(front);
        arg.appendChild(back);
    }

    // public
    var eventHandler = function() {
        // console.log(_domHandler);
        _domHandler.forEach(function(x) {
            _addFrontBackToCards(x);
            _addClassFlip();
        });
    }

    //public method
    return {
        eventHandler: eventHandler,
    };

})();

Calendar.eventHandler();
