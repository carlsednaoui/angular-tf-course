describe("countriesService", function() {
    beforeEach(module('countries'));

    it('should return "hello" when called', function() {
      inject(function(API) {
        expect(testSpec()).toBe("hello");
      });
    });
});
