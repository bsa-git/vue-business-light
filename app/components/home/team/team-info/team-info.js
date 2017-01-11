define([
    'vuex',
    'text!app/components/home/team/team-info/team-info.html',
], function (Vuex, template) {

    // Create component TeamInfo class
    var TeamInfo = {
        name: 'app-team-info',
        template: template,
        created: function () {
            //--- Team ---//
            this.$store.dispatch('receiveTeamInfo');
        },
        computed: Vuex.mapGetters({
            team: 'getTeam',
        }),
        data: function () {
            return {
            }
        }
    };
    return TeamInfo;
});