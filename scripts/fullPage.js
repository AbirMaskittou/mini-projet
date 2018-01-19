$(document).ready(function() {
    $('#fullpage').fullpage({
        lockAnchors: false,
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Review', 'Event\'s page', 'Wallpaper','about us'],
	});
});
function moveIt() {
	console.log("hey");
}