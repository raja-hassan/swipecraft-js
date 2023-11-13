let currentIndex = 0;
const images = document.querySelectorAll(".image-container img");
const visibleImages = 2;
let currentIteration = 0; 
let autoplayInterval;

function changeSlide(direction) {
    console.log(direction);

    if (direction === 1) {
       
        currentIndex += 2; 
    } else if (direction === -1) {
        
        currentIndex -= 2; 
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 2;
    } else if (currentIndex >= images.length) {      
        currentIndex = 0;
        currentIteration++; 
    }

    images.forEach((image) => {
        image.style.display = "none";
    });

    for (let i = 0; i < visibleImages; i++) {
        const index = (currentIndex + i) % images.length;
        images[index].style.display = "block";
    }

  
}



function startAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
        changeSlide(1);
    }, 1000);
}

function pauseAutoplay() {
    clearInterval(autoplayInterval);

}

images.forEach((image) => {
    image.addEventListener("mouseover", pauseAutoplay);
    image.addEventListener("mouseout", startAutoplay);

});

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("mouseover", pauseAutoplay);
leftArrow.addEventListener("mouseout", startAutoplay);

rightArrow.addEventListener("mouseover", pauseAutoplay);
rightArrow.addEventListener("mouseout", startAutoplay);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        changeSlide(-1);
    } else if (event.key === "ArrowRight") {
        changeSlide(1);
    }
});

// Start autoplay initially
startAutoplay();

// Initialize the slideshow
changeSlide(0);
