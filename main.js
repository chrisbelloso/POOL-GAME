let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");



// ------ TITLE ------
ctx.fillStyle = 'black';
ctx.font = '50px fantasy';
ctx.fillText("Chris Pool", 220, 60);



// ------ TABLE ------
ctx.fillStyle = 'red';
ctx.fillRect(160, 100, 330, 480);

// TOP => BLOCK
ctx.fillStyle = 'black';
ctx.fillRect(160, 80, 330, 20)

// BOTTOM => BLOCK
ctx.fillStyle = 'black'
ctx.fillRect(160, 580, 330, 20)

// LEFT => BLOCK
ctx.fillStyle = 'black';
ctx.fillRect(140, 100, 20, 480)

// RIGHT => BLOCK
ctx.fillStyle = 'black';
ctx.fillRect(490, 100, 20, 480)



// ------ HOLES ------


// TOP => LEFT
ctx.beginPath();
ctx.moveTo(160, 100);
ctx.arc(160, 100, 40, 0, Math.PI * 0.5);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();

// TOP => RIGHT
ctx.beginPath();
ctx.moveTo(490, 100);
ctx.arc(490, 100, 40, Math.PI, Math.PI / 2, true);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();

// MIDDLE => LEFT
ctx.beginPath();
ctx.moveTo(490, 330);
ctx.arc(490, 330, 30, Math.PI * 1.5, Math.PI / 2, true);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();

// MIDDLE => RIGHT
ctx.beginPath();
ctx.moveTo(160, 330);
ctx.arc(160, 330, 30, Math.PI * 1.5, Math.PI * 0.5);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();

// BOTTOM => LEFT
ctx.closePath();
ctx.beginPath();
ctx.moveTo(160, 580);
ctx.arc(160, 580, 40, 0, Math.PI * 1.5, true);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();

// BOTTOM => RIGHT
ctx.beginPath();
ctx.moveTo(490, 580)
ctx.arc(490, 580, 40, Math.PI, Math.PI * 1.5);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();



// ------ TABLE CORNERS ------


// TOP => LEFT
ctx.beginPath();
ctx.moveTo(165, 105)
ctx.arc(165, 105, 24, Math.PI, Math.PI * 1.5);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();

// TOP => RIGHT
ctx.closePath();
ctx.beginPath();
ctx.moveTo(485, 105);
ctx.arc(485, 105, 24, 0, Math.PI * 1.5, true);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();

//BOTTOM => LEFT
ctx.beginPath();
ctx.moveTo(165, 575);
ctx.arc(165, 575, 24, Math.PI, Math.PI / 2, true);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();

// BOTTOM => RIGHT
ctx.beginPath();
ctx.moveTo(485, 575);
ctx.arc(485, 575, 24, 0, Math.PI * 0.5);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'black'
ctx.fill();
ctx.closePath();



// ------ BALLS ------


// WHITE BALL
const whiteBall = {
    x: 330,
    y: 480,
    radius: 10,
    color: 'white',
    draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color
    ctx.fill();
    ctx.closePath();
    }
};

whiteBall.draw();

// FIRST BALL
const firstBall = {
    x: 330,
    y: 160,
    radius: 10,
    color: 'blue',
    draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color
    ctx.fill();
    ctx.closePath();    
    }
};

firstBall.draw();

// SECOND BALL
const secondBall = {
    x: 343,
    y: 180,
    radius: 10,
    color: 'blue',
    draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color
    ctx.fill();
    ctx.closePath();
    }
};

secondBall.draw();


// THIRD BALL
ctx.beginPath();
ctx.arc(318, 180, 10, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.closePath();

// FOURTH BALL
ctx.beginPath();
ctx.arc(330, 200, 10, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

// FIFTH BALL
ctx.beginPath();
ctx.arc(355, 200, 10, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

//SIXTH BALL
ctx.beginPath();
ctx.arc(305, 200, 10, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

//SEVENTH BALL
ctx.beginPath();
ctx.arc(343, 220, 10, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.closePath();

//EIGTH BALL
ctx.beginPath();
ctx.arc(318, 220, 10, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.closePath();

// NINTH BALL
ctx.beginPath();
ctx.arc(330, 240, 10, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.closePath();

