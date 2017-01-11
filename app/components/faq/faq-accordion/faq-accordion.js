define([
    'vuex',
    'text!app/components/faq/faq-accordion/faq-accordion.html',
], function (Vuex, template) {

    // Create component FaqAccordion class
    var FaqAccordion = {
        name: 'app-faq-accordion',
        template: template,
        created: function () {
            //--- Faq ---//
            this.$store.dispatch('receiveFaq');
        },
        computed: Vuex.mapGetters({
            faq: 'getFaq',
        }),
        data: function () {
            return {
            }
        }
    };
    return FaqAccordion;
});