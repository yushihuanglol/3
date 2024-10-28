// script.js
let clickCount = 0;

const image = document.getElementById('movable-image');
const video = document.getElementById('video');

image.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount < 5) {
        moveImage();
    } else {
        showVideo();
    }
});

function moveImage() {
    const randomX = Math.random() * window.innerWidth ;
    const randomY = Math.random() * window.innerHeight;

    image.style.position = 'absolute';
    image.style.left = `${randomX}px`;
    image.style.top = `${randomY}px`;
}

function showVideo() {
    image.style.display = 'none';
    video.style.display = 'block';
    video.play();
}