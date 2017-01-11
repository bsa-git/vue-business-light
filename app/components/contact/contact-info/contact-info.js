define([
    'vuex',
    'text!app/components/contact/contact-info/contact-info.html',
], function (Vuex, template) {

    // Create component ContactInfo class
    var ContactInfo = {
        name: 'app-contact-info',
        template: template,
        computed: Vuex.mapGetters({
            about: 'getAbout',
            contacts: 'getContacts',
        }),
        data: function () {
            return { 
            }
        }
    };
    return ContactInfo;
});