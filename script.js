console.log("Jai Mahishmathi");
$(document).ready(function() {
	$('#todoinput').change(function() {
		let todo = $(this).val();
		$('ul').append('<li>' + todo + '<i class="bi bi-check-lg"></i><i class="bi bi-trash"></i>' + '</li>');
		$(this).val('')
	});

	$('ul').on('click', '.bi-trash', function() {
		$(this).parent('li').fadeOut(200);
	});

	$('ul').on('click', '.bi-check-lg', function() {
		$(this).parent('li').toggleClass('checked');
	});

});