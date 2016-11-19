var React = require('react');
require('./map.css');
/**
 * [mapInit description]
 * @param  {[type]} options {
 *     "point": {'lng': 121, 'lat': 31},
 *     "zl": 10,
 *     "map": map
 * }
 * @return {[type]}         [description]
 */
window.mapInit = function(options) {
	var _map = options.map;
	options.point = (options.point) ? options.point : {lng:121.49, lat:31.25};
    options.zl = (options.zl) ? options.zl : 10;
	var myPoint = new BMap.Point(options.point.lng, options.point.lat); // 创建点坐标
	_map.centerAndZoom(myPoint, options.zl);
	_map.enableScrollWheelZoom();                 //启用滚轮放大缩小
};
window.getMyPosition = function() {
	var map = new BMap.Map("mapContainer");      // 创建Map实例
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(data){
		if(this.getStatus() == BMAP_STATUS_SUCCESS) {
			mapInit({
				"point": 
				    {
				    	"lng": data.point.lng,
				        "lat": data.point.lat
				    }, 
				"zl": 10,
				"map": map
			});
		} else {
			mapInit({
				"map": map
			});
		}
	},{enableHighAccuracy: true});
};

var mapElement = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function() {

	},
	componentDidMount: function() {
        this.loadBaiduMapJs();
	},
	loadBaiduMapJs: function() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "//api.map.baidu.com/api?v=2.0&ak=UGhrN3QhCCGOBsEp0y952zDGPhTI9kKu&callback=getMyPosition";
		document.body.appendChild(script);
	},
    render: function() {
        return (
           <div id="mapContainer" className="map-container">

           </div> 
        );
    }
});
module.exports = mapElement;