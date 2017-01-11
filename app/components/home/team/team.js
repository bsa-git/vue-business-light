define([
    'app/components/home/team/team-info/team-info',
    'app/components/home/team/team-members/team-members',
    'app/components/home/team/team-summary/team-summary',
    'text!app/components/home/team/team.html',
], function (TeamInfo, TeamMembers, TeamSummary, template) {

    // Create component Team class
    var Team = {
        name: 'app-team',
        template: template,
        components: {
            'app-team-info': TeamInfo,
            'app-team-members': TeamMembers,
            'app-team-summary': TeamSummary,
        }
    };
    return Team;
});