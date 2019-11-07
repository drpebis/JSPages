function myMove(){
    const refreshRate = 10000 / 60;
    const maxXPosition = 880;
    let rect = document.getElementById('animate');
    let speedX = 1;
    let positionX = 0;
    window.setInterval(() => {
    positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
        }
    rect.style.left = positionX + 'px';
    rect.style.top = positionX/25 + 'px';
    }, refreshRate);
}
function myMove2(){
    const refreshRate = 20000 / 60;
    const maxXPosition = 880;
    let rect = document.getElementById('animate2');
    let speedX = 1;
    let positionX = 200;
    window.setInterval(() => {
    positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
        }
    rect.style.left = positionX + 'px';
    rect.style.top = positionX/20 + 'px';
    }, refreshRate);
}
