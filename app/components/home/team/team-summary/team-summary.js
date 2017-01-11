define([
    'vuex',
    'text!app/components/home/team/team-summary/team-summary.html',
], function (Vuex, template) {

    // Create component TeamSummary class
    var TeamSummary = {
        name: 'app-team-summary',
        template: template,
        computed: Vuex.mapGetters({
            team: 'getTeam',
        }),
        created: function () {
            //--- Team ---//
            this.$store.dispatch('receiveTeamSummary');
        },
        data: function () {
            return {
            }
        }
    };
    return TeamSummary;
});