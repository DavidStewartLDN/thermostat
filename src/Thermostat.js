function Thermostat() {

  // Acts like a @ in ruby, instance variable - also can be used like a attribute accessor
  this.temperature = 20;
  this.powerSavingMode = true;

}

Thermostat.prototype.up = function() {

  if (this.powerSavingMode === true && this.temperature < 25) {
    this.temperature ++
  } else if (this.powerSavingMode === false && this.temperature < 32) {
    this.temperature ++
  }

}

Thermostat.prototype.down = function() {

  if (this.temperature > 10) {
    this.temperature --
  }
}


Thermostat.prototype.reset = function() {

  this.temperature = 20

}

Thermostat.prototype.energyUsage = function() {

  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
  
}