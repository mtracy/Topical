suite('"Home" Page Tests', function(){
	test('page should contain a login link', function(){
		assert($('a[href="/login"]').length);
	});
});
