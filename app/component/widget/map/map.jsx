var React = require('react');
require('./map.css');



var mapElement = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function() {

	},
	componentDidMount: function() {
        this.getMyPosition();
	},
	/**
	 * 定位用户当前位置
	 * @return {[type]} [description]
	 */
	getMyPosition: function() {
		console.log('lbs start...');
		var that = this;
	    var map = new BMap.Map("mapContainer");      // 创建Map实例

        // 本地测试应用
	    console.log('lbs fail');
	    that.mapInit({
	    	"map": map
	    });



        // 线上应用
	    // var geolocation = new BMap.Geolocation();
	    // geolocation.getCurrentPosition(function(data){
	    // 	console.log(data);
	    // 	if(this.getStatus() == BMAP_STATUS_SUCCESS) {
	    // 		console.log('lbs success');
	    // 		that.mapInit({
	    // 			"point": {
        //                 	"lng": data.point.lng,
        //                     "lat": data.point.lat
        //                 }, 
	    // 			"zl": 10,
	    // 			"map": map
	    // 		});
	    // 	} else {
	    // 		console.log('lbs fail');
	    // 		that.mapInit({
	    // 			"map": map
	    // 		});
	    // 	}
	    // },{enableHighAccuracy: true});
	},
	/**
      * [mapInit description]
      * @param  {[type]} options {
      *     "point": {'lng': 121, 'lat': 31},
      *     "zl": 10,
      *     "map": map
      * }
      * @return {[type]}         [description]
    */
	mapInit: function(options) {
	    var _map = options.map;
	    options.point = (options.point) ? options.point : {lng:121.49, lat:31.25};
        options.zl = (options.zl) ? options.zl : 10;
	    var myPoint = new BMap.Point(options.point.lng, options.point.lat); // 创建点坐标
	    _map.centerAndZoom(myPoint, options.zl);
	    _map.enableScrollWheelZoom();                 //启用滚轮放大缩小
	    this.getCityInfo();	 // 获取当前定位城市信息	
	},
	getCityInfo: function() {
        var myCity = new BMap.LocalCity();
	    myCity.get(function(result) {
            console.log(result);
	    });
	},
    render: function() {
        return (
           <div id="mapContainer" className="map-container">

           </div> 
        );
    }
});
module.exports = mapElement;