jQuery(function ($) {
    function init_map1() {
        var myLocation = new google.maps.LatLng(-23.494061042461844, -47.472478497920676);
        var mapOption = {
            center: myLocation,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "localizaçaõ"
        });
        var map = new google.maps.Map(Document.getElementByid("map1"),
        mapOptions);
        marker.setMap(map);
    }
    init_map1();
});