import React, { Component } from 'react';


function initMap() {
  let input = $('#pac-input').get(0);

  let autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);


  autocomplete.addListener('place_changed', function() {
      let place = autocomplete.getPlace();

      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();

      wapi(lat, lng);


      if (!place.geometry) {
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

  $('#use-strict-bounds').click(function() {
      console.log('Checkbox clicked! New state=' + this.checked);
      autocomplete.setOptions({
          strictBounds: this.checked
      });
  });
}


function wapi(lat, lng) {

  $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=7552cb9f95f273b6eaa304fc8b5f5e8f`, function(data) {
      console.log(data);
      setTable(data);

  });
}


function setTable(weatherObject) {
  // weatherObject = JSON.parse(weatherObject);
  let input = $('#pac-input').get(0);
  let table = $('#table');

  if (input.value.length > 0) {
      table.removeClass("table-striped");
  } else {
      table.addClass("table-striped");
  }

  weatherObject.list.forEach(element => {
      table.append(
          `<tr>
              <td>${element.dt_txt}</td>
              <td>${Math.floor(element.main.temp - 273)}</td>
              <td>${element.weather[0].description}</td>
          </tr>
          `
      );
  });
}