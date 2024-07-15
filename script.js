const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    const clickedIndex = Array.from(dots).indexOf(event.target);
    const slideWidth = carousel.querySelector(".container").clientWidth;
    carousel.scrollLeft = clickedIndex * slideWidth;
    updateDots(clickedIndex);
  });
});

const updateDots = (activeIndex) => {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
};

carousel.addEventListener("scroll", () => {
  const slideWidth = carousel.querySelector(".container").clientWidth;
  const currentIndex = Math.round(carousel.scrollLeft / slideWidth);
  updateDots(currentIndex);
});

document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    window.open("https://www.fylehq.com", "_blank");
  });
});

// updateDots(0); // Initialize dots on page load

const infos = document.querySelectorAll(".infos");
const displayedImage = document.getElementById("displayedImage");

infos.forEach((info) => {
  info.addEventListener("click", () => {
    infos.forEach((el) => {
      el.classList.remove("active-info");
    });

    info.classList.add("active-info");
    const newImage = info.getAttribute("data-image");

    // console.log(newImage);
    displayedImage.src = newImage;
  });
});
