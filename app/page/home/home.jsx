var React = require('react');
console.log($);
var homeComponent = React.createClass({
        render: function() {
            return (
                <div className="home-box">
                     I am home page!!
                </div>
            );
        }
});
module.exports = homeComponent;