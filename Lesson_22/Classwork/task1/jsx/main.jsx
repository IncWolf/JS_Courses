var React = require('react');
var ReactDOM = require ('react-dom');

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;

var Output = React.createClass({
    render: function() {
        return (<div><p>Title: {title}</p><p>Width: {width}</p><p>Height: {height}</p></div>)
    }
});
ReactDOM.render(<Output />, document.getElementById('output'));