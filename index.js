const images = ['https://www.tajmahal.gov.in/images/banners/2.jpg', 'https://www.tajmahal.gov.in/images/banners/3.jpg', 'https://www.tajmahal.gov.in/images/banners/4.jpg', 'https://www.tajmahal.gov.in/images/nightview.jpg'];
let currentIndex = 0;
let slideshowIntervalId = null;

const carouselImage = document.getElementById('carousel-image');
const imageDetails = document.getElementById('image-details');
const imageDetails01 = document.getElementById('image-details01');

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const playPauseButton = document.getElementById('play-pause-button');
const thumbnails = document.querySelectorAll('.thumbnail');

function showImage(index) {
    carouselImage.src = images[index];
    imageDetails01.innerHTML = "Taj Mahal";
    imageDetails.innerText = 'Shah Jahan erected many splendid monuments, the most famous of which is the  Taj Mahal at Agra . The Pearl Mosque at Agra, the palace and great mosque at Delhi. The celebrated Peacock Throne, said to be worth millions of dollars by modern estimates. He was the founder of Shahjahanabad, now known as Old Delhi. Other creations of Shah Jahan also include the Diwan-i-Am and Diwan-i-Khas within the Red Fort in Delhi.'; // Replace with actual image details
    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function startSlideshow() {
    slideshowIntervalId = setInterval(() => {
        nextImage();
    }, 3000);
    playPauseButton.innerText = 'Pause';
}

function stopSlideshow() {
    clearInterval(slideshowIntervalId);
    slideshowIntervalId = null;
    playPauseButton.innerText = 'Play';
}

prevButton.addEventListener('click', () => {
    if (slideshowIntervalId !== null) {
        stopSlideshow();
    }
    prevImage();
});

nextButton.addEventListener('click', () => {
    if (slideshowIntervalId !== null) {
        stopSlideshow();
    }
    nextImage();
});

playPauseButton.addEventListener('click', () => {
    if (slideshowIntervalId === null) {
        startSlideshow();
    } else {
        stopSlideshow();
    }
});

thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', () => {
        if (slideshowIntervalId !== null) {
            stopSlideshow();
        }
        currentIndex = i;
        showImage(currentIndex);
    });
});

showImage(currentIndex);
startSlideshow();
