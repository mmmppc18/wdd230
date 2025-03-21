const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

// Add an event listener to the menu button
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});