
let swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
	breakpoints: {
		768: {
			slidesPerView: 4,
			spaceBetween: 20,
			navigation: {
				nextEl: ".mobile-slider-next",
				prevEl: ".mobile-slider-prev",
			},
			pagination: false,
		}
	}
	
});


const rangeInputs = document.querySelectorAll('input[type="range"]');
let rangeNumber = document.querySelector('.calculator__item-summ');

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';

//   console.log(rangeNumber);
  console.log(rangeInputs.value)

}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
});




const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}