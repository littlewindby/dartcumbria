function initMap() {
    var southwest = new google.maps.LatLng(54.0755, -3.6333);
    var northeast = new google.maps.LatLng(55.2442, -2.0827);
    var bounds = new google.maps.LatLngBounds(southwest, northeast);
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 60,
      center: bounds.getCenter()
    });
    map.fitBounds(bounds);
  }
  initMap();
  

