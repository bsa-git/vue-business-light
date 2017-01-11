define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/contact/contact-form/contact-form',
    'app/components/contact/contact-info/contact-info',
    'app/components/contact/google-map/google-map',
    'text!app/components/contact/contact.html'
], function (Breadcrumbs, ContactForm, ContactInfo, GoogleMap, template) {

    // Create component Contact class
    var Contact = {
        name: 'app-contact',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-contact-form': ContactForm,
            'app-contact-info': ContactInfo,
            'app-google-map': GoogleMap,
        }
    };
    return Contact;
});
