define([
    'vuex',
    'text!app/components/app/footer/contact/contact.html',
], function (Vuex, template) {

    // Create component Contact class
    var Contact = {
        name: 'app-contact',
        template: template,
        created: function () {
            //--- Personal data ---//
            this.$store.dispatch('receivePersonalData');
        },
        computed: Vuex.mapGetters({
            contact: 'getContacts'
        }),
        data: function () {
            return {
            }
        },
    };
    return Contact;
});