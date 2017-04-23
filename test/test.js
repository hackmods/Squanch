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
        var result = squanch('Hey Rick its Rick, whats the formula for dark matter?');
        expect(result).to.contain('squanch');
    });
});