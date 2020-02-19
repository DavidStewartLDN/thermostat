'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

    describe('#temperature', function(){

      it ("starts at 20 degrees", function(){

        expect(thermostat.temperature).toEqual(20);

      });

    });

    describe('#powerSavingMode', function(){

      it ("is on by default/true", function(){

        expect(thermostat.powerSavingMode).toEqual(true);

      });

    });


    describe('#up', function(){

      it ("passing up function will increase temperature by 1", function(){

        thermostat.up()
        expect(thermostat.temperature).toEqual(21);

      });

      it("should not increase temperature over 25 if power saving mode is on", function(){

        // Power saving mode is on by default so doe not need to define.

        thermostat.temperature = 25
        thermostat.up()
        expect(thermostat.temperature).toEqual(25);

      });

      it("should not increase temperature up to 32 if power saving mode is off", function(){

        // Power saving mode is on by default so doe not need to define.

        thermostat.powerSavingMode = false
        thermostat.temperature = 31
        thermostat.up()
        expect(thermostat.temperature).toEqual(32);

      });

      it("should not increase temperature over 32 if power saving mode is off", function(){

        // Power saving mode is on by default so doe not need to define.

        thermostat.powerSavingMode = false
        thermostat.temperature = 32
        thermostat.up()
        expect(thermostat.temperature).toEqual(32);

      });

    });

    describe('#down', function(){

      it ("passing down function will decrease temperature by 1", function(){

        thermostat.down()
        expect(thermostat.temperature).toEqual(19);

      });

      it ("down function does not decrease temperature below 10", function(){

        thermostat.temperature = 10
        thermostat.down()
        expect(thermostat.temperature).toEqual(10);

      });

    });

    describe('#reset', function(){

      it ("resets temperature to 20", function(){

        thermostat.temperature = 24
        thermostat.reset()
        expect(thermostat.temperature).toEqual(20);

      });

    });

    describe('#energyUsage', function(){

      it ("returns low-usage if temperature < 18", function(){

        thermostat.temperature = 15
        expect(thermostat.energyUsage()).toEqual("low-usage");

      });

      it ("returns low-usage if temperature < 25", function(){

        thermostat.temperature = 23
        expect(thermostat.energyUsage()).toEqual("medium-usage");

      });

      it ("returns low-usage if temperature >= 25", function(){

        thermostat.temperature = 28
        expect(thermostat.energyUsage()).toEqual("high-usage");

      });

    });

});