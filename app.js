document.getElementById("field").addEventListener("click", function (event) {
    let ball = document.getElementById("ball");

    let fieldRect = this.getBoundingClientRect();

    let targetX = event.clientX - fieldRect.left - ball.clientWidth / 2;
    let targetY = event.clientY - fieldRect.top - ball.clientHeight / 2;

    let currentX = parseFloat(ball.style.left) || 20;
    let currentY = parseFloat(ball.style.top) || 20;

    let dx = targetX - currentX;
    let dy = targetY - currentY;
    let distance = Math.sqrt(dx * dx + dy * dy);

    let rotation = (distance / 10) * 360;

    ball.style.transition = `transform ${distance / 500}s linear, left 0s, top 0s`;
    ball.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotation}deg)`;

    setTimeout(() => {
        ball.style.transition = 'none';
        ball.style.left = `${targetX}px`;
        ball.style.top = `${targetY}px`;
        ball.style.transform = `rotate(${rotation}deg)`;
    }, distance / 500 * 1000);
});