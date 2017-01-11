define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _socials = {
        my: config.personal_data.socials,
        share: {
            facebook: { url: '#', icon: 'fa-facebook' },
            twitter: { url: '#', icon: 'fa-twitter' },
            google: { url: '#', icon: 'fa-google-plus' },
            linkdin: { url: '#', icon: 'fa-linkedin' },
            flickr: { url: '#', icon: 'fa-flickr' },
            skype: { url: '#', icon: 'fa-skype' }
        },
        twitter: {
            url: config.personal_data.twitter.url,
            tag: config.personal_data.twitter.tag,
            msgs: [
                {
                    title: 'Lorem ipsum dolor et, consectetur adipiscing eli.',
                    date: '28 February 2014'
                },
                {
                    title: 'Lorem ipsum dolor et, consectetur adipiscing eli.An Fusce eleifend aliquet nis application.',
                    date: '28 February 2014'
                },
                {
                    title: 'Lorem ipsum dolor et, consectetur adipiscing eli.',
                    date: '28 February 2014'
                },
            ]
        },

    };

    var getMySocials = function (cb) {
        if (env === 'testing') {
            var socials = _.pick(_socials, ['my']);
            cb(socials.my);
        } else {
            var socials = _.pick(_socials, ['my']);
            cb(socials.my);
        }
    };

    var getShareSocials = function (cb) {
        if (env === 'testing') {
            var socials = _.pick(_socials, ['share']);
            cb(socials.share);
        } else {
            var socials = _.pick(_socials, ['share']);
            cb(socials.share);
        }
    };

    var getTwitter = function (cb) {
        if (env === 'testing') {
            var socials = _.pick(_socials, ['twitter']);
            cb(socials.twitter);
        } else {
            var socials = _.pick(_socials, ['twitter']);
            cb(socials.twitter);
        }
    };

    return {
        getTwitter: getTwitter,
        getMySocials: getMySocials,
        getShareSocials: getShareSocials,
    }

});

