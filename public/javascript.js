var currentSlide = 0;

function openModal(index){
    modal = document.querySelector(".modal");
    modal.style.display = "flex";
    currentSlide = index;
    setCurrentImage()
    document.body.className = "bodyclass";
}

function closeModal(){
    modal = document.querySelector(".modal");
    modal.style.display = "none";
    document.querySelector("body").classList.remove("bodyclass");
}

function setCurrentImage() {
    modalImage = document.querySelector("#modalImage")
    cars = document.querySelectorAll(".shop");
    modalImage.src = cars[currentSlide].childNodes[1].src;
}

function changeSlide(i) {
    currentSlide += i;
    setCurrentImage();
}

var audio;
function myAudioFunction(){
    if (audio){
        audio.pause()
        audio.currentTime = 0;
        audio = null;
    }
    else{
    audio = new Audio('trendy.mp3');
    audio.play();
    }
}

