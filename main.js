jQuery(document).ready(function() {

	// Open modal
    jQuery('.mm-open-modal').on('click', function() {
        jQuery('.mm-modal-container').addClass('open');
        jQuery('body').addClass('noScroll');
        setTimeout(function(){
            jQuery('.mm-modal').addClass('open');    
        }, 50);
    });

    jQuery('.mm-modal-close').on('click', function() {
        jQuery('.mm-modal-form').slideDown();
        jQuery('.mm-register-form').slideUp();
        jQuery('.mm-forgot-password-form').slideUp();
        jQuery('.mm-modal').removeClass('open');
        jQuery('body').removeClass('noScroll');
        setTimeout(function(){
            jQuery('.mm-modal-container').removeClass('open');
        }, 500);
    });

});