# Vue-Business-Light

I used a free template [Osahan – Free Responsive Business Bootstrap Template](https://graygrids.com/item/osahan-free-responsive-business-bootstrap-template/)
to demonstrate some of the features remarkable library [Vue.js](http://vuejs.org/). 

Main features of the package:

- can build reactive Web user interfaces.
- an process HTML templates to generate Web application views that be composed by different parts.
- assembly of modules is done by technology Asynchronous module definition (AMD). 
To ensure this technology is used library [RequireJS]( http://requirejs.org/ ) is a JavaScript file and module loader.
- to separate the data used [Vuex](http://vuex.vuejs.org/en/intro.html) (state management pattern) for Vue.js applications.
- provides routing via [Vue-Router](http://router.vuejs.org/en/) to create a Single Page Application.
- the user interface is built using [Bootstrap3]( http://getbootstrap.com/ ) is the most popular HTML, CSS, 
and JS framework for developing responsive, mobile first projects on the web.

### [Demo...](https://vue-examples-4878a.firebaseapp.com/#!/)


## Installing

### Prerequisites

- [Apache2](https://httpd.apache.org/download.cgi), [Nginx](http://nginx.org/en/) web server or similar

### Deploying

1. Clone or download [vue-business-light](https://github.com/bsa-git/vue-business-light) project with git.
2. Configure the web server so that the entry point was `index.html`.
3. Access your project url with web browser (eg. http://localhost/vue-business-light/index.html).

## Overview Vue.js

Main features of the Vue.js:

- Reactivity.
- Components .
- Modularity.
- Animations.
- Routing.
- Stability.

Vue.js (pronounced /vjuː/, like view) is a library for building interactive web interfaces. 
The goal of Vue.js is to provide the benefits of reactive data binding and composable 
view components with an API that is as simple as possible.

Vue.js itself is not a full-blown framework - it is focused on the view layer only. 
It is therefore very easy to pick up and to integrate with other libraries or 
existing projects. On the other hand, when used in combination with proper tooling 
and supporting libraries, Vue.js is also perfectly capable of powering sophisticated 
Single-Page Applications.

If you are an experienced frontend developer and want to know how Vue.js compares 
to other libraries/frameworks, check out the [Comparison with Other Frameworks](http://vuejs.org/guide/comparison.html); 

### [Learn more...](https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.xzsmgdym1)

## Optimization

To optimize, run:

    node app/js/r.js -o build_require.js

That build command creates an optimized version of the project in a
**public** directory. The main.js file will be optimized to include
all of its dependencies.

For more information on the optimizer:
http://requirejs.org/docs/optimization.html

For more information on using requirejs:
http://requirejs.org/docs/api.html


