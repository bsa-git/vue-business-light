define([
    // Contact form validation
    'app/js/jquery-plugins/jqBootstrapValidation',
    'app/js/contact/contact_me',
    'text!app/components/contact/contact-form/contact-form.html',
], function (Validation, sentMessage, template) {

    // Create component ContactForm class
    var ContactForm = {
        name: 'app-contact-form',
        template: template,
        mounted: function () {
            sentMessage(this.urlForm);
        },
        data: function () {
            return { 
                 urlForm: "./bin/contact_me.php"
            }
        }
    };
    return ContactForm;
});