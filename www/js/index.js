var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function( ) {
      var startPos;

        navigator.geolocation.getCurrentPosition(function(position) { 
          startPos = position;
          document.getElementById("startLat").innerHTML = position.coords.latitude;
          document.getElementById("startLon").innerHTML = position.coords.longitude;
          document.getElementById("startAcu").innerHTML = position.coords.accuracy;  

          //initialize(position.coords.latitude,position.coords.longitude); 
          // polePosition();     
        },
            function(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }, 

            {timeout: 10000, enableHighAccuracy: true});


// google maps code
     // function initialize(la,lo) {
     //                    var myLatlng = new google.maps.LatLng(la, lo);
     //                    var mapOptions = {center: myLatlng, zoom: 25};
     //                    var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

     //                    var marker = new google.maps.Marker({position: myLatlng,map: map,title:"MY POSITION"});
     //                }
// watchPosition
  // function polePosition(){
    
        navigator.geolocation.watchPosition(function(position) { 
           
          document.getElementById("currentLat").innerHTML = position.coords.latitude;
          document.getElementById("currentLon").innerHTML = position.coords.longitude;
          document.getElementById("currentAcu").innerHTML = position.coords.accuracy;

          document.getElementById("distancem").innerHTML =
              calculateDistance(startPos.coords.latitude, startPos.coords.longitude,
                                position.coords.latitude, position.coords.longitude);

          document.getElementById("distance").innerHTML =
              calculateDistance(startPos.coords.latitude, startPos.coords.longitude,
                                position.coords.latitude, position.coords.longitude) / 1000;
        },
        function(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            },
        { frequency: 3000, enableHighAccuracy: true });
  //}

    function calculateDistance(lat1, lon1, lat2, lon2) {
        //var R = 6371; // km
        var R = 6371000; // m
        var dLat = (lat2-lat1).toRad();
        var dLon = (lon2-lon1).toRad();
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d;
      }
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }
}
     
};
