define([], function () {

    // initial state
    var state = {
        url: '',
        title1: '',
        title2: '',
        title3: '',
        categories: [],
        popular: [],
        pager: {},
        posts: [],
        post: {},
    };

    var mutations = {

        RECEIVE_BLOG_POSTS: function (state, blog) {
            // Clone the object passed, that there was no link between them
            var cloneBlog = _.cloneDeep(blog);
            state.url = cloneBlog.url;
            state.title1 = cloneBlog.title1;
            state.title2 = cloneBlog.title2;
            state.title3 = cloneBlog.title3;
            state.pager = cloneBlog.pager;
            state.posts = cloneBlog.posts;
        },

        RECEIVE_BLOG_POST: function (state, blog) {
            // Clone the object passed, that there was no link between them
            var cloneBlog = _.cloneDeep(blog);
            state.url = cloneBlog.url;
            state.post = cloneBlog.post;
        },

        RECEIVE_BLOG_CATEGORIES: function (state, blog) {
            // Clone the object passed, that there was no link between them
            var cloneBlog = _.cloneDeep(blog);
            state.categories = cloneBlog.categories;
        },

        RECEIVE_BLOG_POPULAR: function (state, blog) {
            // Clone the object passed, that there was no link between them
            var cloneBlog = _.cloneDeep(blog);
            state.popular = cloneBlog.popular;
        },
    };

    return {
        state: state,
        mutations: mutations
    };

});

