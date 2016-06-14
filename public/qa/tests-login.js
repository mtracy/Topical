suite('"Login" Page Tests', function(){
    test('login page should contain a submit link', function(){
          assert($('input[type="submit"]').length);
            });
});
