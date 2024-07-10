// Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');
let downloadBtn = document.getElementById('downloadBtn');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 500;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    // Remove existing transform classes
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');

    // Move slider items and apply animation class
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        // Reset the transform position after the animation ends
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

// Pause and Play
let playPauseDom = document.querySelector('.container input[type="checkbox"]');
let isPaused = false;

playPauseDom.addEventListener('click', function() {
    isPaused = !isPaused;
    if (isPaused) {
        clearTimeout(runNextAuto);
        clearTimeout(runTimeOut);
    } else {
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext - (timeAutoNext % timeRunning));
    }
});

// Get the buttons and label elements
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playPauseLabel = document.querySelector('.container input[type="checkbox"]');

// Add event listeners for keyboard events
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            nextButton.click();
            break;
        case 'ArrowLeft':
            prevButton.click();
            break;
        case ' ':
            playPauseLabel.click();
            break;
    }
});



// Come Back Title Tab




let doctitle = document.title;
window.addEventListener("blur", () =>{document.title = "Come Back ☹";})
window.addEventListener("focus", () =>{document.title = doctitle;})




// Function to download the current image
document.getElementById('downloadbtn').addEventListener('click', function() {
    // Select the first visible image in the carousel
    let currentImage = document.querySelector('.carousel .list .item .imageoverlay');
    
    if (currentImage) {
        let imageSrc = currentImage.src;
        let imageId = currentImage.id;
        let link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageId + '.' + imageSrc.split('.').pop(); // Use the image ID as the filename with the correct extension
        document.body.appendChild(link); // Append the link to the body
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link after download
    } else {
        console.log('No current image found.');
    }
});

