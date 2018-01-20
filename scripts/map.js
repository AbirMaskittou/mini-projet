function initMap()
{
        var uluru = { lat: 32.0043, lng: -6.5783  };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Azilal</h1>' +
            '<div id="bodyContent">' +
            '<p>Azilal is a town in central Morocco, in the Atlas Mountains.It is located at around. South of Azilal, there is a 304.8 metres high mast for longwave broadcasting.</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            title: 'Azilal'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        
        map.setZoom(10);
    }