import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import SearchExample from './SearchExample'
//import ServiceChooser from './ServiceChooser'
//import PictureList from './PictureList'
import SearchPeople from './SearchPeople'
//import PostComment from './PostComment'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App items = { ['Home', 'Services', 'About', 'Contact us'] } />, document.getElementById('root'));


var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

var pictures = [
    {
        id: 1,
        src: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
        title: 'Cat1',
        favorite: false
    },
    {
        id: 2,
        src: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
        title: 'cat2',
        favorite: false
    }

]

var people = [
    {name: 'Peter', age:22},
    {name: 'Tom', age:22},
    {name: 'Bill', age:24},
    {name: 'Allen', age:26},
    {name: 'Alice', age:24}
]

var Comment = [
    {name: 'qw123', Comment:'this is just a test'}
]



//ReactDOM.render(<App items = { ['Home', 'Services', 'About', 'Contact us'] } />, document.getElementById('root'));
//ReactDOM.render(<SearchExample items={libraries}/>, document.getElementById('root'));
//ReactDOM.render(<ServiceChooser items={services}/>, document.getElementById('root'));
//ReactDOM.render(<PictureList items={pictures}/>, document.getElementById('root'));
ReactDOM.render(<SearchPeople items={people}/>, document.getElementById('root'));
//ReactDOM.render(<PostComment items={Comment}/>, document.getElementById('root'));

registerServiceWorker();
