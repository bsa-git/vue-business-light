define([
    'vuex',
    'text!app/components/home/team/team-members/team-members.html',
], function (Vuex, template) {

    // Create component TeamMembers class
    var TeamMembers = {
        name: 'app-team-members',
        template: template,
        computed: Vuex.mapGetters({
            team: 'getTeam',
        }),
        created: function () {
            //--- Team ---//
            this.$store.dispatch('receiveTeamMembers');
        },
        data: function () {
            return {
            }
        }
    };
    return TeamMembers;
});