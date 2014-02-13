/*
	Menu function that scroll to the correct page.
*/
function scrollToPage(id) {

	var to = ('#'+id);

	$("body").animate({
		scrollTop: $(to).offset().top
	});

}

$(document).ready(function(){

	/*
		Trigger the function when a menu link is clicked.
	 */
	$('.menu a').click(function(){

		var id = $(this).attr('to');
		scrollToPage(id);

	});

});
