define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _team = {
        info: {
            title: 'Our Great Team',
            description: 'Duis id tortor nec justo vehicula aliquet at non magna. Integer fermentum eros eu gravida vestibulum. Vivamus eget ultrices quam, in semper nibh. Vivamus tincidunt euismod justo.'
        },
        summary: [
            {
                title: 'Clients',
                sum: '253',
                icon: 'fa-smile-o'
            },
            {
                title: 'Projects',
                sum: '592',
                icon: 'fa-briefcase'
            },
            {
                title: 'Trophies',
                sum: '35',
                icon: 'fa-trophy'
            },
        ],
        members: [
            {
                name: 'Chip Mayer',
                position: 'Founder & CEO',
                about: 'Hello. I love my work.',
                img_src: 'app/images/team/1.png',
                img_alt: 'Member',
                social_icons: [
                    {
                        class: 'facebook',
                        url: '#',
                        icon: 'fa-facebook'
                    },
                    {
                        class: 'twitter',
                        url: '#',
                        icon: 'fa-twitter'
                    },
                    {
                        class: 'google',
                        url: '#',
                        icon: 'fa-google-plus'
                    }
                ]
            },
            {
                name: 'James Hillier',
                position: 'Creative Director',
                about: 'Hi! I take beautiful photos.',
                img_src: 'app/images/team/2.png',
                img_alt: 'Member',
                social_icons: [
                    {
                        class: 'facebook',
                        url: '#',
                        icon: 'fa-facebook'
                    },
                    {
                        class: 'twitter',
                        url: '#',
                        icon: 'fa-twitter'
                    },
                    {
                        class: 'google',
                        url: '#',
                        icon: 'fa-google-plus'
                    }
                ]
            },
            {
                name: 'Louis Williams',
                position: 'Operator',
                about: 'Whoa! I\'m video junkie.',
                img_src: 'app/images/team/3.png',
                img_alt: 'Member',
                social_icons: [
                    {
                        class: 'facebook',
                        url: '#',
                        icon: 'fa-facebook'
                    },
                    {
                        class: 'twitter',
                        url: '#',
                        icon: 'fa-twitter'
                    },
                    {
                        class: 'google',
                        url: '#',
                        icon: 'fa-google-plus'
                    }
                ]
            },
            {
                name: 'Joy Heuser',
                position: 'Manager',
                about: 'Hello. I love my clients.',
                img_src: 'app/images/team/4.png',
                img_alt: 'Member',
                social_icons: [
                    {
                        class: 'facebook',
                        url: '#',
                        icon: 'fa-facebook'
                    },
                    {
                        class: 'twitter',
                        url: '#',
                        icon: 'fa-twitter'
                    },
                    {
                        class: 'google',
                        url: '#',
                        icon: 'fa-google-plus'
                    }
                ]
            },
        ]
    };

    var getInfo = function (cb) {
        if (env === 'testing') {
            var team = _.pick(_team, ['info']); 
            cb(team.info);
        } else {
            var team = _.pick(_team, ['info']); 
            cb(info);
        }

    };

    var getSummary = function (cb) {
        if (env === 'testing') {
            var team = _.pick(_team, ['summary']); 
            cb(team.summary);
        } else {
            var team = _.pick(_team, ['summary']); 
            cb(team.summary);
        }

    };

    var getMembers = function (cb) {
        if (env === 'testing') {
            var team = _.pick(_team, ['members']); 
            cb(team.members);
        } else {
            var team = _.pick(_team, ['members']); 
            cb(team.members);
        }

    };

    return {
        getInfo: getInfo,
        getSummary: getSummary,
        getMembers: getMembers,
    }

});

