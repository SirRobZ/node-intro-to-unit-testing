const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	//test normal case
	it('should do fizzbuzz on input number', function() {

		const normalCases = [
		{a: 30, expected: 'fizz-buzz'},
		{a: 20, expected: 'buzz'},
		{a: 21, expected: 'fizz'}
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.a);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if args not numbers', function() {

		const badInputs = [
		['a'],
		['1'],
		[false]
		];
		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});