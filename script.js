// script.js
let clickCount = 0;

const image = document.getElementById('movable-image');
const video = document.getElementById('video');
const image1 = document.getElementById('image');

image.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount < 5) {
        moveImage();
    } else {
        showVideo();
    }
});

function moveImage() {
    const randomX = Math.random() * 40 ;
    const randomY = Math.random() * 40;

    image.style.position = 'absolute';
    image.style.left = `${randomX}px`;
    image.style.top = `${randomY}px`;
}

function showVideo() {
    image.style.display = 'none';
    video.style.display = 'block';
    video.play();

    setTimeout(() => {
        video.style.display = 'none'; // Скрыть видео и текст через 15 секунд
        document.body.style.backgroundImage = 'url("your-background-image.jpg")'; // Заменить фон
    }, 10000);

    setTimeout(() => {
        image1.style.display = 'block'; // Скрыть видео и текст через 15 секунд
        document.body.style.backgroundImage = 'url("background-image.jpg")';
    }, 15000);
}
