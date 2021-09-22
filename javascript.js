var currentSlide = 0;

function openModal(){
    modal = document.querySelector(".modal");
    modal.style.display = "flex";
    setCurrentImage()
    document.body.className = "bodyclass";
}

function setCurrentImage() {
    modalImage = document.querySelector("#modalImage")
    cars = document.querySelectorAll(".shop");
    modalImage.src = cars.at(currentSlide).childNodes[1].src;
}

function changeSlide(i) {
    currentSlide += i;
    setCurrentImage();
}