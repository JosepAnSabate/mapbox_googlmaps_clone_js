mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXBhbnNhYmF0ZSIsImEiOiJja21kejl5bHUxdzhoMnBwaDg0YjJ1bDRxIn0.fVRAXWvmIKHZ-4igiQQeRg';
//la teva posicio
navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {
        enableHighAccuracy: true
    })    
function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
    setupMap([2.15714, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 11
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
    //directions
    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1Ijoiam9zZXBhbnNhYmF0ZSIsImEiOiJja21kejl5bHUxdzhoMnBwaDg0YjJ1bDRxIn0.fVRAXWvmIKHZ-4igiQQeRg',
        unit: 'metric'
        
      });
      
     
      
     map.addControl(directions, 'top-left');
}

