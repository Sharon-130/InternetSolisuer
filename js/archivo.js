const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');


let currentIndex = 0;

function showItem(index) {

  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });


  carouselItems[index].style.display = 'block';
}


function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
}


function prevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
}

// Agrega botones de navegación
const prevButton = document.createElement('button');
prevButton.textContent = '<';
prevButton.classList.add('control', 'anterior');
if (carousel) { // Add a check if carousel exists before appending
  carousel.appendChild(prevButton);
}


const nextButton = document.createElement('button');
nextButton.textContent = '>';
nextButton.classList.add('control', 'siguiente');
if (carousel) { // Add a check if carousel exists before appending
  carousel.appendChild(nextButton);
}


if (prevButton) {
  prevButton.addEventListener('click', prevItem);
}
if (nextButton) {
  nextButton.addEventListener('click', nextItem);
}


let startX = 0;
let endX = 0;

if (carousel) { 
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (endX < startX) {
      nextItem();
    } else if (endX > startX) {
      prevItem();
    }
  });

  carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX;
  });

  carousel.addEventListener('mouseup', (e) => {
    endX = e.clientX;
    if (endX < startX) {
      nextItem();
    } else if (endX > startX) {
      prevItem();
    }
  });
}


showItem(currentIndex);


if (carouselItems.length > 0) {
  setInterval(nextItem, 4000);
}

