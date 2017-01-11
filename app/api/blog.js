define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;
    var total = config.personal_data.blog.total; // the amount of posts per page
    var url = config.personal_data.blog.url; // blog url

    var _blog = {
        url: url,
        title1: 'blog',
        title2: 'Lorem ipsum',
        title3: 'In maximus auctor fringilla.',
        categories: [
            {
                url: '#',
                type: 'Brandign'
            },
            {
                url: '#',
                type: 'Design'
            },
            {
                url: '#',
                type: 'Development'
            },
            {
                url: '#',
                type: 'Graphic'
            },
        ],
        popular: [
            {
                url: '#',
                img: 'app/images/instagram-01.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
                creation_date: 'Jul 29 2016'
            },
            {
                url: '#',
                img: 'app/images/instagram-02.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
                creation_date: 'Jul 29 2016'
            },
            {
                url: '#',
                img: 'app/images/instagram-03.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
                creation_date: 'Jul 29 2016'
            },
            {
                url: '#',
                img: 'app/images/instagram-04.jpg',
                creation_date: 'Jul 29 2016',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...'
            },
            {
                url: '#',
                img: 'app/images/instagram-05.jpg',
                creation_date: 'Jul 29 2016',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...'
            },
            {
                url: '#',
                img: 'app/images/instagram-06.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
                creation_date: 'Jul 29 2016'
            },
            {
                url: '#',
                img: 'app/images/instagram-07.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
                creation_date: 'Jul 29 2016'
            },
        ],
        pager: {
            total: total,
            first_url: '#',
            last_url: '#',
            next_url: '#',
            prev_url: '#',
        },
        posts: [
            {
                title: 'Blog Post Title',
                url: '#',
                img: 'app/images/blog-01.jpg',
                icon: 'fa-camera',
                date: 'June 17, 2016',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
                meta: {
                    user: { name: 'Osahan', url: '#' },
                    date: 'August 28, 2016 at 10:00 PM',
                    tags: [
                        { url: '#', item: 'WordPress' },
                        { url: '#', item: 'Graphic' },
                    ],
                    comments: { count: 4, url: '#' }
                },
            },
            {
                title: 'Blog Post Title',
                url: '#',
                img: 'app/images/blog-02.jpg',
                icon: 'fa-film',
                date: 'June 17, 2016',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
                meta: {
                    user: { name: 'Osahan', url: '#' },
                    date: 'August 28, 2016 at 10:00 PM',
                    tags: [
                        { url: '#', item: 'WordPress' },
                        { url: '#', item: 'Graphic' },
                    ],
                    comments: { count: 4, url: '#' }
                },
            },
            {
                title: 'Blog Post Title',
                url: '#',
                img: 'app/images/blog-03.jpg',
                icon: 'fa-file-text',
                date: 'June 17, 2016',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
                meta: {
                    user: { name: 'Osahan', url: '#' },
                    date: 'August 28, 2016 at 10:00 PM',
                    tags: [
                        { url: '#', item: 'WordPress' },
                        { url: '#', item: 'Graphic' },
                    ],
                    comments: { count: 4, url: '#' }
                },
            },
        ],
        post: {
            img: 'app/images/blog-03.jpg',
            content: '<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>',
            meta: {
                user: { name: 'Osahan', url: '#' },
                date: 'August 28, 2016 at 10:00 PM',
                tags: [
                    { url: '#', item: 'WordPress' },
                    { url: '#', item: 'Graphic' },
                ],
                comments: { count: 4, url: '#' }
            },
            comments: [
                {
                    img: 'app/images/instagram-05.jpg',
                    user_url: '#',
                    user_name: 'John Doe',
                    date: 'February 15, 2016 at 11:39 pm',
                    content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                    reply_url: '#',
                    reply: [
                        {
                            img: 'app/images/instagram-07.jpg',
                            user_url: '#',
                            user_name: 'John Doe',
                            date: 'February 15, 2016 at 11:39 pm',
                            content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                            reply_url: '#',
                            reply: [
                                {
                                    img: 'app/images/instagram-02.jpg',
                                    user_url: '#',
                                    user_name: 'John Doe',
                                    date: 'February 15, 2016 at 11:39 pm',
                                    content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                    reply_url: '#',
                                    reply: []
                                }
                            ]
                        },
                        {
                            img: 'app/images/instagram-01.jpg',
                            user_url: '#',
                            user_name: 'John Doe',
                            date: 'February 15, 2016 at 11:39 pm',
                            content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                            reply_url: '#',
                            reply: []
                        },
                    ]
                },
                {
                    img: 'app/images/instagram-02.jpg',
                    user_url: '#',
                    user_name: 'John Doe',
                    date: 'February 15, 2016 at 11:39 pm',
                    content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                    reply_url: '#',
                    reply: [
                        {
                            img: 'app/images/instagram-04.jpg',
                            user_url: '#',
                            user_name: 'John Doe',
                            date: 'February 15, 2016 at 11:39 pm',
                            content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                            reply_url: '#',
                            reply: []
                        },
                        {
                            img: 'app/images/instagram-01.jpg',
                            user_url: '#',
                            user_name: 'John Doe',
                            date: 'February 15, 2016 at 11:39 pm',
                            content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                            reply_url: '#',
                            reply: []
                        },
                    ]
                },
            ]
        },
    };

    var getPosts = function (cb, id) {
        if (env === 'testing') {
            var blog = _.pick(_blog, ['url', 'title1', 'title2', 'title3', 'posts', 'pager']);
            cb(blog);
        } else {
            var blog = _.pick(_blog, ['url', 'title1', 'title2', 'title3', 'posts', 'pager']);
            cb(blog);
        }

    };

    var getPost = function (cb, id) {
        if (env === 'testing') {
            var blog = _.pick(_blog, ['url', 'post']);
            cb(blog);
        } else {
            var blog = _.pick(_blog, ['url', 'post']);
            cb(blog);
        }

    };

    var getCategories = function (cb) {
        if (env === 'testing') {
            var blog = _.pick(_blog, ['categories']);
            cb(blog);
        } else {
            var blog = _.pick(_blog, ['categories']);
            cb(blog);
        }

    };

    var getPopular = function (cb) {
        if (env === 'testing') {
            var blog = _.pick(_blog, ['popular']);
            cb(blog);
        } else {
            var blog = _.pick(_blog, ['popular']);
            cb(blog);
        }

    };



    return {
        getPosts: getPosts,
        getPost: getPost,
        getCategories: getCategories,
        getPopular: getPopular,
    }

});

