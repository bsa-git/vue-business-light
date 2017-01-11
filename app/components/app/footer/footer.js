define([
    'app/components/app/footer/subscribe/subscribe',
    'app/components/app/footer/twitter/twitter',
    'app/components/app/footer/instagram/instagram',
    'app/components/app/footer/contact/contact',
    'app/components/app/footer/copyright/copyright',
    'app/components/app/footer/social/social',
    'text!app/components/app/footer/footer.html',
], function (Subscribe, Twitter, Instagram, Contact, Copyright, Social, template) {

    // Create component Footer class
    var Footer = {
        name: 'app-footer',
        template: template,
        components: {
            'app-subscribe': Subscribe,
            'app-twitter': Twitter,
            'app-instagram': Instagram,
            'app-contact': Contact,
            'app-copyright': Copyright,
            'app-my-social': Social,
        },
    };
    return Footer;
});