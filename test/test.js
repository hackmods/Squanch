'use strict';

var expect = require('chai').expect;
var squanch = require('../index');

describe('#squanch', function() {
    it('should contain squanch', function() {
        var result = squanch('Morty');
        expect(result).to.equal('squanch');
    });

    it('should default to squanch', function() {
        var result = squanch();
        expect(result).to.equal('squanch');
    });

    it('should contain at least one squanch', function() {
        var result = squanch('Hey Rick its Rick, whats the secret formula for creating dark matter?');
        expect(result).to.contain('squanch');
    });

    it('should contain at least one Squanch', function() {
        var result = squanch('Hey Rick its Rick, Whats The Secret Formula For Creating Dark Matter?');
        expect(result).to.contain('Squanch');
    });

    it('should contain at least one SQUANCH', function() {
        var result = squanch('HEY RICK ITS RICK, WHATS THE SECRET FORMULA FOR CREATING DARK MATTER?');
        expect(result).to.contain('SQUANCH');
    });

    it('should contain at least one squanching', function() {
        var result = squanch('Hey Ricking its Ricking, whating the secreting formulaing for creating darking mattering?');
        expect(result).to.contain('squanching');
    });

    it('should contain at least one Squanched', function() {
        var result = squanch('Hey Ricked its Ricked, Whated The Secreted Formuled For Creatinged Darked Mattered?');
        expect(result).to.contain('Squanched');
    });

/*
      it('should contain at least one squanching(.)', function() {
        var result = squanch('Heying. Ricking. itsing. Ricking. whating. the. secreting. formulaing. foring. creating. darking. mattering.');
        expect(result).to.contain('squanching');
    });
*/

});