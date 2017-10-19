jQuery(document).ready(function(){
	jQuery('.post-entry img').each(function(){
	
		var attr = jQuery(this).attr('width');

		// For some browsers, `attr` is undefined; for others,
		// `attr` is false.  Check for both.
		if (typeof attr !== 'undefined' && attr !== false) {
			theWidth = jQuery(this).attr('width');
			jQuery(this).css('width',theWidth + 'px').addClass('ie-img-fix');
		}

	});
});