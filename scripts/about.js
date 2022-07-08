(function slider() {

    // Select all slides
    const slides = document.querySelectorAll(".slide");

    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });



    // current slide counter
    let curSlide = 0;

    // select next slide button
    const nextSlide = document.querySelector(".slider-btn-next");

    // add event listener and next slide functionality
    nextSlide.addEventListener("click", function () {
        
        if(curSlide == (slides.length - 1)) {
            curSlide = (slides.length - 1);
        }
        else {
            curSlide++;
        }
        slides.forEach((slide, indx) => {

            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });


    // select prev slide button
    const prevSlide = document.querySelector(".slider-btn-prev");

    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = 0;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

})();
