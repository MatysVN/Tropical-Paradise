const nav = document.querySelector(".nav__items");
const burgerBtn = document.querySelector(".burger-btn");
const navItem = document.querySelectorAll(".nav__item");

const showMenu = () => {
	nav.classList.toggle("nav__items--active");

	navItem.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav__items--active");
		});
	});
	menuItemAnimation();
};

const menuItemAnimation = () => {
	let delayTime = 0;
	navItem.forEach((item) => {
		item.classList.toggle("nav__item--animation");
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++
	});
};

burgerBtn.addEventListener("click", showMenu);
