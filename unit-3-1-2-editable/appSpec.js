describe('editable', function() {
    beforeEach(function() {
        module('myApp');
        module('template');
    });

    it("should be true", function() {
        expect(true).toBe(true);
    });

    it("should be true", function() {
        inject(function(editMode) {
            expect(editMode.mode).toBe(false);
        })
    });
})