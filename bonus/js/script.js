//console.log('Final-8');

const carouselEl = document.querySelector(".carousel");

const slides = [
	{
		imgSrc: "./img/01.png",
		title: "Final Eight 2023",
		description:
			"Qualche curiosità sulla coppa (giusto per renderci conto che Milano non è così figa come finge di essere)",
	},

	{
		imgSrc: "./img/02.jpg",
		title: "Benetton Treviso",
		description:
			"La squadra che ha vinto il maggior numero di coppe, 5, una in più di Milano!",
	},

	{
		imgSrc: "./img/03.jpg",
		title: "Olimpia Milano",
		description:
			"La squadra che ha partecipato a più Final Eight (ben 18 edizioni, pensate la noia) per vincerne solo 4!",
	},

	{
		imgSrc: "./img/04.jpg",
		title: "Sassari - Pesaro, Final Eight 2021",
		description:
			"La partita (stupenda) con il punteggio più alto nella storia delle Final Eight con 225 punti totali",
	},

	{
		imgSrc: "./img/05.jpg",
		title: "Ettore Messina",
		description:
			"L'allenatore che ha vinto più coppe nella storia, 7 (il fatto che alleni Milano è solo un caso)",
	},

	{
		imgSrc: "./img/06.jpg",
		title: "Adrian Banks",
		description:
			"Ha realizzato il maggior numero di punti della storia delle Final Eight in una singola partita (37 - Final Eight 2020) e indovinate? Non giocava a Milano!",
	},
];
//console.log(slides)

slides.forEach((slide, i) => {
    
    //console.log(slide)
	const imgSrc = slide.imgSrc;
	const title = slide.title;
	const description = slide.description;
    //console.log(imgSrc, title, description)

    let slideEl = document.createElement("div");
    slideEl.classList.add("slide");


    if (i === 0) {
        slideEl.classList.add("active");
    }
    

    slideEl.innerHTML += `<img src=${imgSrc}>`;
    
    let slideBodyEl = document.createElement("div");
    slideBodyEl.classList.add("slide-body");
    slideBodyEl.innerHTML += 
    `
    <h2 class="slide-body__title">${title}</h2> 
    <p class="slide-body__description">${description}</p>
    `;
    
    slideEl.appendChild(slideBodyEl);
    
    carouselEl.appendChild(slideEl);
})


//AUTOPLAY AUTOMATICO 
let slideEl = document.querySelectorAll('.slide')
let index = 0
const backwardEl = document.querySelector('.arrow-left')
const forwardEl = document.querySelector('.arrow-right')
const playEl = document.querySelector('.play')
const stopEl = document.querySelector('.stop')

let autoRunClockwise
let autoRunAnticlockwise

playEl.addEventListener('click', clockwiseAutoRun)
stopEl.addEventListener('click', clearClockwise)
stopEl.addEventListener('click', clearAnticlockwise)
backwardEl.addEventListener('click', antiClockwiseAutoRun)
forwardEl.addEventListener('click', clockwiseAutoRun)

const suggestEl = document.querySelector('.suggest')
suggestEl.style.display = 'none'

const timer = setTimeout(function() {
    suggestEl.style.display = 'flex'
},3000)



// //FUNZIONI

function sliderAnticlockwise () {
    stopTimer()
    clearClockwise()
    let slideActive = slideEl[index]
    slideActive.classList.remove('active')
    if (index > 0) {
         index -= 1;
       } else { 
         index = slides.length - 1
       }

    let slideNext = slideEl[index];
    slideNext.classList.add("active");
}

function sliderClockwise () {
    stopTimer()
    clearAnticlockwise()
    let slideActive = slideEl[index]
    slideActive.classList.remove('active')
    if (index < slides.length - 1) {
        index += 1;
    } else { 
        index = 0;
    }
    let slideNext = slideEl[index];
    slideNext.classList.add("active");
}

function clockwiseAutoRun () {
    if(!autoRunClockwise) {
        autoRunClockwise = setInterval(sliderClockwise, 3000)
    }
}

function antiClockwiseAutoRun () {
    if(!autoRunAnticlockwise) {
        autoRunAnticlockwise = setInterval(sliderAnticlockwise, 3000)
    }
}

function clearClockwise () {
    clearInterval(autoRunClockwise)
    autoRunClockwise = undefined
}

function clearAnticlockwise () {
    clearInterval(autoRunAnticlockwise)
    autoRunAnticlockwise = undefined
}

function stopTimer () {
    suggestEl.style.display = 'none'
    clearTimeout(timer)
}



//AUTOPLAY CHE PARTE DOPO 3 SEC SE NON CLICCHI I PULSANTI//

// arrowLeft.addEventListener('click', sliderAnticlockwise)
// arrowLeft.addEventListener('click', handleClick)

// arrowRight.addEventListener('click', sliderClockwise)
// arrowRight.addEventListener('click', handleClick)

// startTimer()

// //FUNZIONI

// function sliderAnticlockwise () {
//     let slideActive = slideEl[index]
//     slideActive.classList.remove('active')
//     if (index > 0) {
//          index -= 1;
//        } else { 
//          index = slides.length - 1
//        }

//        let slideNext = slideEl[index];
//        slideNext.classList.add("active");
// }

// function sliderClockwise () {
//     let slideActive = slideEl[index]
//     slideActive.classList.remove('active')
//     if (index < slides.length - 1) {
//             index += 1;
//     } else { 
//          index = 0;
//     }
//     let slideNext = slideEl[index];
//     slideNext.classList.add("active");
// }

// function startTimer() {
//     timer = setTimeout( function() {
//         autoRun = setInterval(sliderClockwise, 3000)
//     }, 3000);

// }

// function handleClick(e) {
//     if (e.target.matches('.right') || e.target.matches('.left')) {
//         clearTimeout(timer)
//         clearInterval(autoRun);
//         startTimer();
//     }
//   }
