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
        navigator.geolocation.getCurrentPosition(function(position) { 
          document.getElementById("startLat").innerHTML = position.coords.latitude;
          document.getElementById("startLon").innerHTML = position.coords.longitude;
          document.getElementById("startAcu").innerHTML = position.coords.accuracy;  

          initialize(position.coords.latitude,position.coords.longitude); 
          polePosition();     
        },
            function(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }, 

            {timeout: 10000, enableHighAccuracy: true});


// google maps code
     function initialize(la,lo) {
                        var myLatlng = new google.maps.LatLng(la, lo);
                        var mapOptions = {center: myLatlng, zoom: 25};
                        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

                        var marker = new google.maps.Marker({position: myLatlng,map: map,title:"MY POSITION"});
                    }
// watchPosition
  function polePosition(){
        navigator.geolocation.watchPosition(function(position) { 
          document.getElementById("currentLat").innerHTML = position.coords.latitude;
          document.getElementById("currentLon").innerHTML = position.coords.longitude;
          document.getElementById("currentAcu").innerHTML = position.coords.accuracy;
        },
        function(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            },
        { frequency: 3000, frequencytimeout: 15000, enableHighAccuracy: true });
  }

    // {frequency: 3000, frequencytimeout: 15000, enableHighAccuracy: true}
}
     
};
