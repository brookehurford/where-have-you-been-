function Place(locationCity, locationCountry, landmark, timeOfYear, notes) {
  this.locationCity = locationCity;
  this.locationCountry = locationCountry;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.fullLocation = function() {
  return this.locationCity + ", " + this.locationCountry;
}
Place.prototype.fullDetail = function() {
  return this.landmark + ", " + this.timeOfYear + ", " + this.notes;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocationCity = $("input#new-location-city").val();
    var inputtedLocationCountry = $("input#new-location-country").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeOfYear = $("input#new-timeOfYear").val();
    var inputtedNote = $("input#new-note").val();
    var newPlace = new Place(inputtedLocationCity, inputtedLocationCountry, inputtedLandmark, inputtedTimeOfYear, inputtedNote);

    $("ul#places").append("<li><span class='place'>" + newPlace.fullLocation() + "</span></li>");

    $("input#input#new-location-city").val("");
    $("input#new-location-country").val("");
    $("input#new-landmark").val("");
    $("input#new-timeOfYear").val("");
    $("input#new-note").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.fullLocation());
      $(".City").text(newPlace.locationCity);
      $(".Country").text(newPlace.locationCountry);
      $(".landmarks").text(newPlace.landmark);
      $(".timeOfYear").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });

  });
});
