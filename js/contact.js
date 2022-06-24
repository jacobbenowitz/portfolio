$(function () {

    "use strict";

    // init the validator
    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {

            var messageAlert = 'alert-' + 'success';
            var messageText = "Your message successfully submitted. Thank you, I look forward to connecting with you!";

            // let's compose Bootstrap alert box HTML
            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
                // inject the alert to .messages div in our form
                $('#contact-form').find('.messages').html(alertBox);
                // empty the form
                $('#contact-form')[0].reset();
            }
        };
        
    });
});