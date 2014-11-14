$(document).ready(function() {
	// Cross an item off
	$('.item').click(function(event) {
		alert('clicked!');
		if ( $(this).hasClass('done') ) {
			event.preventDefault();
			$(this).removeClass('done');
		} else {
			event.preventDefault();
			$(this).addClass('done');
		}
	});

	// Remove it from the list
	$('.remove').click(function(event) {
		event.preventDefault();
		$(this).parent().fadeOut(600);
	});

	$('button').click(function() {
		if ( $('#item_val').val() != '' ) {
			var newItem = $('#item_val').val();
			$('#list').append(
				"<li><a class=\"remove\" href=\"#\">" + 
				"<img src=\"img/remove.png\"></a>" +
				"<a class=\"item\" href=\"#\">"+
				newItem + "</a></li>");
			$('#item_val').val('');			
		}
	});
});

