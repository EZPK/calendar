"use strict";

/*
    Calendar Object
*/
class Calendar {
    /*
        Creating a calendar by parsing html into document. Take an INT of days to create
        equivalent amount of caseDay.
        Make instance of CaseDay wich provide a way to create new case for calendar.
        Make those case clickable if the date is correct and launch a flip animation and sound.
    */

    constructor(days) {
        this.nbDays = days;
        this.dayCards = [];
        this.dayCard = {};
    }

    init() {
        this.createDays(this.nbDays);
        this.addMarginToContainer();
    }

    createDays(num) {
        for (let i = 0; i < num + 1; i++) {
            this.dayCard = new CaseDay(i, 'div');
            this.dayCard.init();
            this.dayCard.container.setAttribute('class', 'container' + i);
            this.dayCards.push(this.dayCard);
        }
    }

    addMarginToContainer() {
        this.dayCards.map(function(x){
            x.container.style.margin = '30px';
            // x.container.style.float = "left";
        });
    }

}

/*
    CaseDay Object
*/
class CaseDay {
    constructor(date, HTMLElement) {
        this.table = document.querySelector('.table');
        this.container = {};
        this.htmlElem = HTMLElement;
        this.date = new Date("October" + (date + 1).toString() + ", 2017").getDate();
        this.nodeHtml = {};
        this.front = {};
        this.back = {};
    }

    init() {
        this.addACaseContainer();
        this.addACaseDay();
        this.addFrontAndBack();
        this.displayDate();
        this.addClickEvent();
    }

    addACaseContainer() {
        this.nodeHtml = document.createElement(this.htmlElem);
        this.container = this.nodeHtml;
        this.table.appendChild(this.nodeHtml);
        this.nodeHtml.setAttribute('id', 'container');
    }

    addACaseDay() {
        this.nodeHtml = document.createElement(this.htmlElem);
        this.container.appendChild(this.nodeHtml);
        this.nodeHtml.setAttribute('id', 'day');
        this.nodeHtml.setAttribute('date', this.date);
    }

    addFrontAndBack() {
        this.front = document.createElement(this.htmlElem);
        this.back = document.createElement(this.htmlElem);
        this.front.setAttribute('class', 'front');
        this.back.setAttribute('class', 'back');
        this.nodeHtml.appendChild(this.front);
        this.nodeHtml.appendChild(this.back);
    }

    matchDate() {
        this.today = new Date().getDate();
        let self = this;
        if (this.today >= self.date) {
            return true;
        } else {
            return false;
        }
    }

    addClickEvent() {
        let self = this;
        if (self.matchDate()) {
            self.container.addEventListener('click', function(e) {
                let audioList = ['sounds/magicwand1.mp3', 'sounds/magicwand2.mp3', 'sounds/magicwand3.mp3', 'sounds/magicwand4.mp3','sounds/magicwand5.mp3','sounds/magicwand6.mp3','sounds/magicwand7.mp3'];
                let audio = new Audio(audioList[self.date -1]);
                audio.volume = 0.05;
                audio.play();
                if (self.container.classList.contains('flip')) {
                    self.container.classList.remove('flip');
                } else {
                    self.container.classList.add('flip');
                }
            });
        } else {
            console.log("dates not matching");
        }
    }

    displayDate() {
        this.textElem = document.createElement('p');
        this.text = document.createTextNode(this.date);
        this.textElem.style.color = "#EDC059";
        this.textElem.appendChild(this.text);
        this.front.appendChild(this.textElem);
    }

}

const cal = new Calendar(25);
cal.init();

/*
    SnowFlake
*/

let arrayImg = ["img/flake1.png", "img/flake2.png", "img/flake3.png", "img/flake4.png","img/flake5.png", "img/flake6.png"];
arrayImg.map(function(x){
    snowFall.snow(document.body, {image : x, minSize: 10, maxSize:32, flakeCount:20});
})

/*
    Music player
*/

let audio = document.getElementsByTagName('audio');
audio[0].volume = 0.08;
