// import 'CaseDay' from './module2.js';

"use strict";

class Calendar {
    constructor(){
        this.table = $('.table');
        this.cells = $('.cell');
        // this.cards = $('.card');
        // this.card = new CaseDay();
        // this.cards = new CaseDay();
        this.cardFaces = 2;
        this.today = new Date().getDate();
    }

    init(){
        // this.addFrontAndBack();
        // this.addClickEvent();
        // this.addDate();
        // this.testDate();
    }

    // addFrontAndBack(){
    //     this.cards.each(function(){
    //         let card = $(this);
    //         card.append($("<div></div>").addClass("front"));
    //         card.append($("<div></div>").addClass("back"));
    //     });
    // }

    // addClickEvent(){
    //     this.cards.each(function(){
    //         $(this).click(function(){
    //             if($(this).children().hasClass('flip')){
    //                 $(this).children().removeClass('flip');
    //             }else{
    //                 $(this).children().addClass('flip');
    //             }
    //         });
    //     });
    // }

    // addDate(){
    //     let self = this;
    //     this.cards.each(function(x){
    //         this.date = new Date("October" + (parseInt(x)+1).toString() + ", 2017");
    //         self.testDate();
    //         // console.log(this.date.getDate());
    //         this.cardChilds = $(this).children();
    //         this.cardChilds.first().text(this.date.getDate());
    //         return this.date.getDate();
    //     });
    //
    // }
    //
    // testDate(){
    //     console.log('testDate');
    // }



}


const cal = new Calendar();
cal.init();
