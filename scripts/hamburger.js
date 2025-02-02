const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('open');
	if (navigation.style.left === "0px") {
		navigation.style.left = "-250px";
	} else {
		navigation.style.left = "0px";
	}
});
