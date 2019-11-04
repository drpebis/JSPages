function myMove(){
    const refreshRate = 1000 / 60;
    const maxXPosition = 400;
    let rect = document.getElementById('animate');
    let speedX = 1;
    let positionX = 0;
    window.setInterval(() => {
    positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
        }
    rect.style.left = positionX + 'px';
    }, refreshRate);
}
function myMove2(){
    const refreshRate = 2000 / 60;
    const maxXPosition = 400;
    let rect = document.getElementById('animate2');
    let speedX = 1;
    let positionX = 0;
    window.setInterval(() => {
    positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
        }
    rect.style.left = positionX + 'px';
    }, refreshRate);
}
function myMove3(){
    const refreshRate = 500 / 60;
    const maxXPosition = 400;
    let rect = document.getElementById('animate');
    let speedX = 1;
    let positionX = 0;
    window.setInterval(() => {
    positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
        }
    rect.style.left = positionX + 'px';
    }, refreshRate);
}