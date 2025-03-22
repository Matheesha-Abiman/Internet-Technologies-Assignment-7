let intervalId;
let currentIndex = 0;
let direction = 1;

function start() {
    if (intervalId) return; 

    const boxes = Array.from(document.querySelectorAll(".box"));
    const colors = [
        "#C70000", 
        "#FF0B0B", 
        "#FF4141", 
        "#FF9393",
        "#FFBCBC", 
    ];

    intervalId = setInterval(() => {
       
        boxes.forEach(box => box.style.backgroundColor = "#ffffff");

        for (let i = 0; i < colors.length; i++) {
            const index = (currentIndex + i) % boxes.length;
            boxes[index].style.backgroundColor = colors[i];
        }

        currentIndex += direction;

        if (currentIndex >= boxes.length || currentIndex < 0) {
            direction *= -1;
            currentIndex += direction * 2;
        }
    }, 150); 
}

function stop() {
    if (intervalId) {
        clearInterval(intervalId); 
        intervalId = null; 
    }
}