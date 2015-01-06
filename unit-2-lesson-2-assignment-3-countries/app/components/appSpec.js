describe("countriesService", function() {
    beforeEach(module('countries'));

    it('should return "hello" when called', function() {
      inject(function(API) {
        expect(API.testSpec()).toBe("hello");
      });
    });

    it('should find a country by countryCode', function() {
      inject(function(API) {
        var countries = [{
          name: 'country 1',
          countryCode: 1
        },
        {
          name: 'country 2',
          countryCode: 2
        }];
        var countryId = 2;

        expect(API.findCountryById(countryId, countries)).toBe(countries[1]);
      });
    });
});
