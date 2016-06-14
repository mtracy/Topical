var Browser = require('zombie'),
    assert = require('chai').assert;

var browser;
suite('Cross-Page Tests', function(){
  setup(function(){
    browser = new Browser();
  });
  test('Visiting login from homepage should set referrer field', function(done){
        var referrer = 'http://localhost:3000/';
        browser.visit(referrer, function(){
          browser.clickLink('.login', function(){
            assert(browser.resources[0].request.headers._headers[0][1] === referrer);
            done();
          });
        });
  });

  test('visiting the login page dirctly should result ' +
      'in an empty referrer field', function(done){
          browser.visit('http://localhost:3000/login',
              function(){
                assert(browser.field('referrer').value === '');
                done();
              });
      });
});
