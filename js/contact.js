var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/admin@fenja.se',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.append('<div class="alert alert--loading">Skickar meddelande…</div>');
        },
        success: function(data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--success">Meddelande skickat!</div>');
        },
        error: function(err) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
        }
    });
});
