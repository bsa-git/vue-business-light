define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _gallery = {
        title1: 'Responsive gallery',
        title2: 'Lorem ipsum',
        title3: 'Phasellus eleifend ex enim, non viverra justo pretium vel.',
        instagram: [
            'app/images/instagram-01.jpg',
            'app/images/instagram-02.jpg',
            'app/images/instagram-03.jpg',
            'app/images/instagram-04.jpg',
            'app/images/instagram-05.jpg',
            'app/images/instagram-06.jpg',
            'app/images/instagram-07.jpg',
            'app/images/instagram-08.jpg',
            'app/images/instagram-09.jpg',
        ],
        items: [
            {
                id: '1',
                url: '#',
                img: 'app/images/gallery-01.jpg',
                description: 'This is the first one on my Gallery'
            },
            {
                id: '2',
                url: '#',
                img: 'app/images/instagram-02.jpg',
                description: 'This is the second one on my Gallery'
            },
            {
                id: '3',
                url: '#',
                img: 'app/images/gallery-03.jpg',
                description: 'This is the third one on my Gallery'
            },
            {
                id: '4',
                url: '#',
                img: 'app/images/instagram-04.jpg',
                description: 'This is the fourth one on my Gallery'
            },
            {
                id: '5',
                url: '#',
                img: 'app/images/instagram-05.jpg',
                description: 'This is the fifth one on my Gallery'
            },
            {
                id: '6',
                url: '#',
                img: 'app/images/instagram-06.jpg',
                description: 'This is the sixth one on my Gallery'
            },
            {
                id: '7',
                url: '#',
                img: 'app/images/instagram-07.jpg',
                description: 'This is the seventh one on my Gallery'
            },
            {
                id: '8',
                url: '#',
                img: 'app/images/instagram-08.jpg',
                description: 'This is the eighth one on my Gallery'
            },
            {
                id: '9',
                url: '#',
                img: 'app/images/gallery-09.jpg',
                description: 'This is the ninth one on my Gallery'
            }
        ]
    };

    var getGallery = function (cb) {
        if (env === 'testing') {
            var gallery = _.pick(_gallery, ['title1', 'title2', 'title3', 'items']);
            cb(gallery);
        } else {
            var gallery = _.pick(_gallery, ['title1', 'title2', 'title3', 'items']);
            cb(gallery);
        }
    };

    var getInstagram = function (cb) {
        if (env === 'testing') {
            var gallery = _.pick(_gallery, ['instagram']);
            cb(gallery);
        } else {
            var gallery = _.pick(_gallery, ['instagram']);
            cb(gallery);
        }
    };

    return {
        getGallery: getGallery,
        getInstagram: getInstagram
    }

});

