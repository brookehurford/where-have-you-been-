describe ("Place", function () {
  it("create a new place with the given properties", function() {
    var testPlace = new Place("Golden", "United States", "Coors Brewery", "Fall", "I like beer");
    expect(testPlace.locationCity).to.equal("Golden");
    expect(testPlace.locationCountry).to.equal("United States");
    expect(testPlace.landmark).to.equal("Coors Brewery");
    expect(testPlace.timeOfYear).to.equal("Fall");
    expect(testPlace.notes).to.equal("I like beer");
  });

  it("adds the fullLocation method to a place", function() {
    var testPlace = new Place("Golden", "United States");
    expect(testPlace.fullLocation()).to.equal("Golden, United States");
  });

  it("adds the fullDetail method to the place", function() {
    var testPlace = new Place("Golden", "United States", "Coors Brewery", "Fall", "I like beer");
    expect(testPlace.fullDetail()).to.equal("Coors Brewery, Fall, I like beer");
  });
});
