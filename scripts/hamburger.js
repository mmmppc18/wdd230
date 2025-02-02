
const mainnax = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	mainav.classList.toggle('show');
	hamButton.classList.toggle('open');
});
