var map;
$(document).ready(function ()  {
	initMap();
});
function initMap()
{
	// mapBaseConfig=;
    // mapBaseConfig = data.MapConfig.基本设置;
    var centerPoint = "116.46|39.92".split("|");
    var initZoom = 11;
    var minZoom = 5;
    var maxZoom = 19;

    var centerpointGGStr = GPS.gcj_encrypt(parseFloat(centerPoint[1]), parseFloat(centerPoint[0]));

    var centerPointGGLat = centerpointGGStr.lat; //中心纬度Google
    var centerPointGGLng = centerpointGGStr.lon; //中心经度

    var centerPointGG = new google.maps.LatLng(centerPointGGLat, centerPointGGLng);

    // 创建Map实例
    var myOptions =
    {
        zoom : parseInt(initZoom) - 1,
        center : centerPointGG,
        disableDefaultUI : false,
        panControl : true,
        zoomControl : true,
        zoomControlOptions :
        {
            style : google.maps.ZoomControlStyle.LARGE,
            position : google.maps.ControlPosition.LEFT_TOP
        },
        streetViewControlOptions :
        {
            position : google.maps.ControlPosition.LEFT_TOP
        },
        scaleControl : true,
        mapTypeControl : true,
        mapTypeControlOptions :
        {
            position : google.maps.ControlPosition.RIGHT_TOP
        },
        mapTypeId : google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById("allmap"), myOptions);
    window.searchClass = new SearchClass();
}
function SearchClass(data) {
    this.datas = data;
}