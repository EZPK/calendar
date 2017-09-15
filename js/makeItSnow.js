"use strick";

class Snowflake {
    constructor(letter, speed, xMovement, yMovement) {
        this.body = letter;
        this.flake = {};
        this.speed = speed;
        this.x = xMovement;
        this.y = yMovement;
    }

    init() {
        this.createSnowFlake();
        this.startFalling(this.x);
    }

    createSnowFlake() {
        this.flake = document.createElement('p');
        this.flake.setAttribute('class', 'snowFlake');
        this.flake.style.left = Math.random() * 100 + 'vw';
        this.flake.style.opacity = Math.random() * (1 - 0.4) + 0.4;
        this.body = document.createTextNode(this.body);
        this.flake.appendChild(this.body);
        document.body.appendChild(this.flake);
    }

    startFalling(moveX) {
        this.flake.style.transition = this.speed * 4 + 's' + ' ' + 'ease-out';
        this.flake.style.transform = 'translateY('+ document.body.scrollHeight * 1.8 + 'px) translateX(' + Math.floor(this.x*100) + 'px)';
        console.log('translateY('+ document.body.scrollHeight * 1.8 + 'px) translateX(' + Math.floor(this.x*1000) + 'px)');
        this.moveLeftRight();
    }

    moveLeftRight() {
        let test = Math.floor(Math.random() * 100);
    }

    destroy() {
        let flakes = document.querySelectorAll('.snowFlake');
        flakes[0].remove();
    }

}

window.setInterval(function() {
    let randomNb = Math.random() * 100;
    let snowFlake = new Snowflake('*', 20, randomNb / 100, 10);
    let sin = Math.sin(snowFlake.x);
    let flakes = document.querySelectorAll('.snowFlake');
    snowFlake.init();
    if (flakes.length > 160) {
        snowFlake.destroy();
    }
    // console.log(flakes.length);

}, 100);
