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

for (let i = 0; i < slides.length; i++) {
	let slide = slides[i];
	const imgSrc = slide.imgSrc;
	const title = slide.title;
	const description = slide.description;

	let slideEl = document.createElement("div");
	slideEl.classList.add("slide");

	if (i === 0) {
		slideEl.classList.add("active");
	}

	slideEl.innerHTML += `<img src=${imgSrc}>`;

	let slideBodyEl = document.createElement("div");
	slideBodyEl.classList.add("slide-body");
	slideBodyEl.innerHTML += `<h2 class="slide-body__title">${title}</h2> <p class="slide-body__description">${description}</p>`;

	slideEl.appendChild(slideBodyEl);

	carouselEl.appendChild(slideEl);
}

let slideEl = document.querySelectorAll('.slide')
let index = 0
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')

arrowLeft.addEventListener('click', sliderAnticlockwise)

arrowRight.addEventListener('click', sliderClockwise)

//FUNZIONI

function sliderAnticlockwise () {
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

