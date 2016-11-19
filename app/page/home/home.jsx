var React = require('react');
require('../../component/widget/common/common.css');
var homePageStyle = require('./home.useable.css');

var MapElement = require('../../component/widget/map/map.jsx');

var homeComponent = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function () {
        homePageStyle.use();
    },
    componentWillUnmount: function() {
        homePageStyle.unuse();
    },
    render: function() {
        return (
            <div className="home-box">
                <MapElement />
            </div>
        );
    }
});
module.exports = homeComponent;