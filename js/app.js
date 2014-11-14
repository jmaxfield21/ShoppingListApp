$(document).ready(function() {
	// Cross an item off
	$(document).on('click', '.item', function(event) {
		event.preventDefault();
		$(this).toggleClass('done');
	});

	// Remove it from the list
	$(document).on('click', '.remove', function(event) {
		event.preventDefault();
		$(this).parent().fadeOut();
	});

	// Add item from list
	$('#item_val').keypress(function(event) {
		if ( event.which == 13 ) {
			$('button').click();
		}
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

