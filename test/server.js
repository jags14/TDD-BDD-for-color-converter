var expect = require('chai').expect;
var request = require('request');

describe("color code converter API", function(){
	describe("RGB to HEX value conversion", function(){
		var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

		it("returns status 200", function(done){
			request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
				// done is executed only when our expectations were executes
				done();
			});
		});
		it("returns color in hex", function(done){
			request(url, function(error, response, body){
				expect(body).to.equal("ffffff");
				done();
			});
			
		});
	});

	describe("HEX to RGB conversion", function(done){
		var url = "http://localhost:3000/hexToRgb?hex=00ff00";
		it("returns status 200", function(){
			request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
				done();
			});
		});
		it("returns color in RGB", function(done){
			request(url, function(error, response, body){
				expect(body).to.equal("[0, 255, 0");
				done();
			});
		});
	});
});