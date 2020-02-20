$(document).ready(function(){
  var thermostat = new Thermostat;
  updateTemperature();
  updateMode();


  $.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=285828e02b448c9f8789b7fca2cf7c74&units=metric', function(data) {
    $('#current-outside-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=285828e02b448c9f8789b7fca2cf7c74&units=metric', function(data) {
      $('#current-outside-temperature').text(data.main.temp);
    })
  })

  $("#temperature-up1").on("click", function(){ // event listener
    thermostat.up() // update model
    updateTemperature(); // update view
  })
  $("#temperature-down1").on("click", function(){
    thermostat.down()
    updateTemperature(); // update view
  })
  $("#temperature-reset").on("click", function(){
    thermostat.reset()
    updateTemperature(); // update view
  })
  $("#powersaving-switch").on("click", function(){ // event listener
    thermostat.powerSavingSwitch() // update model
    updateTemperature(); // update view
    updateMode();
  })

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr('class', thermostat.energyUsage());
  }
  function updateMode() {
    var status;
    if (thermostat.powerSavingMode === true) {
      status = "On"
    } else {
      status = "Off"
    }
    $("#mode").text("Power Saving Mode: " + status)
  }
});