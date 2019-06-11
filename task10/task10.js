function initMap() {
    let input = document.getElementById('pac-input');

    // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    let autocomplete = new google.maps.places.Autocomplete(input);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name']);


    autocomplete.addListener('place_changed', function() {
        let place = autocomplete.getPlace();

        let lat = place.geometry.location.lat();
        let lng = place.geometry.location.lng();

        wapi(lat, lng);


        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
        let radioButton = document.getElementById(id);
        radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
        });
    }

    setupClickListener('changetype-all', []);
    setupClickListener('changetype-address', ['address']);
    setupClickListener('changetype-establishment', ['establishment']);
    setupClickListener('changetype-geocode', ['geocode']);
    setupClickListener('changetype-geocode', ['geocode']);

    document.getElementById('use-strict-bounds')
        .addEventListener('click', function() {
            console.log('Checkbox clicked! New state=' + this.checked);
            autocomplete.setOptions({
                strictBounds: this.checked
            });
        });
}


function wapi(lat, lng) {
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    let xhr = new XHR();

    // (2) запрос на другой домен :)
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lng + '&appid=7552cb9f95f273b6eaa304fc8b5f5e8f', true);

    xhr.onload = function() {
        setTable(this.responseText);
    }

    xhr.onerror = function() {
        console.log('Error:', this.status);
    }

    xhr.send();
}



function setTable(weatherObject) {
    weatherObject = JSON.parse(weatherObject);

    let table = document.getElementById('table');

    let cells = table.querySelectorAll('td');

    weatherObject.list.forEach((element, index) => {
        cells[index + index * 2].innerHTML = element.dt_txt;
        cells[index + index * 2 + 1].innerHTML = Math.floor(element.main.temp - 273);
        cells[index + index * 2 + 2].innerHTML = element.weather[0].description;
    });
}