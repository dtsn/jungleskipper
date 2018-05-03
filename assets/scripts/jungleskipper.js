(function ($) {
	// menu toggle for mobile site
	var menuButton = $.getElementById('menu');
	var menu = $.querySelector('nav > ul');
	var content = $.querySelector('section.content');
	menuButton.addEventListener('click', function () {
		// toggle the display of the menu
		menu.style.display = menu.style.display === '' ? 'block' : '';
		menuButton.classList.toggle('open');
		content.classList.toggle('openmenu');
	});
})(document);