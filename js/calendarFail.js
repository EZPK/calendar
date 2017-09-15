function addImgToDiv(){
    var divs = document.querySelectorAll(".card");
    for(var i = 0; i < divs.length; i++){
        var div = divs[i];
        var front = document.createElement('div');
        var back = document.createElement('div');
        front.setAttribute('class', 'front');
        front.setAttribute('id','divImg'+parseInt(i)+1);

        var frontImg = document.createElement('img');
        frontImg.setAttribute('src', 'http://www.politicalmetaphors.com/wp-content/uploads/2015/04/blog-shapes-square-windows.jpg');
        frontImg.setAttribute('style', 'max-width:80px');
        frontImg.setAttribute('style', 'height:80px');
        front.appendChild(frontImg);

        back.setAttribute('class', 'back');
        back.setAttribute('id','divImg'+parseInt(i)+1);

        div.appendChild(front);
        div.appendChild(back);
    }
}

function flipCase(){
    var divs = document.querySelectorAll(".divTableCell");
    for(var i=0; i< divs.length; i++){
        divs[i].addEventListener('click', function(event){
            var front  = this.querySelectorAll(".card .front");
            var back = this.querySelectorAll(".card .back");
            for(var x = 0; x <= divs.length; x++){
                front[x].style.setProperty('transform', 'rotateY(180deg)');
                back[x].style.setProperty('transform', 'rotateY(180deg)');
            }
        }, false);
    }
}

function setDateAttr(){
    var dateArray = [
        "December 1, 2017",
        "December 2, 2017",
        "December 3, 2017",
        "December 4, 2017",
        "December 5, 2017",
        "December 6, 2017",
        "December 7, 2017",
        "December 8, 2017",
        "December 9, 2017",
        "December 10, 2017",
        "December 11, 2017",
        "December 12, 2017",
        "December 13, 2017",
        "December 14, 2017",
        "December 15, 2017",
        "December 16, 2017",
        "December 17, 2017",
        "December 18, 2017",
        "December 19, 2017",
        "December 20, 2017",
        "December 21, 2017",
        "December 22, 2017",
        "December 23, 2017",
        "December 24, 2017",
    ];
    var backs = document.querySelectorAll('.back');
    var divs = document.querySelectorAll(".divTableCell");

    for(var i=0; i< divs.length; i++){
        var fixedDate = new Date(dateArray[i]);
        divs[i].setAttribute('date', fixedDate);
        var backTxt = document.createElement('p');
        var date = document.createTextNode(fixedDate.getDate());
        backs[i].appendChild(backTxt);
        backTxt.appendChild(date);
        backTxt.setAttribute('style', 'transform: scaleX(-1)');
    }
}


//work only for december 16 atm
function checkDate(){
    var mnt  = new Date('December 16');
    var clicked = document.querySelectorAll(".divTableCell");
    for(var i = 0; i < clicked.length; i++){
        clicked[i].addEventListener('click', function(event){
            console.log(this.getAttribute('date'));
            if(new Date(this.getAttribute('date')).getDate() == mnt.getDate()){
                console.log('Yopo');
                makeItSnow();
            }
        })
    }
}

function makeItSnow(){
    var snowFlake = document.querySelectorAll('.snowFlake');
    var h = window.innerHeight;
    var w = window.innerWidth;
    snowFlake[0].style.top = 0;
    snowFlake[0].style.transition = 3;
    snowFlake[0].style.top = h;
}



(function(){
    addImgToDiv();
    setDateAttr();
    flipCase();
    checkDate();
})();
