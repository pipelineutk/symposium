 // from Amit Agarwal, thank you!!! https://ctrlq.org/code/20004-google-spreadsheets-json
 // ID of the Google Spreadsheet
 
 // ID of the Google Spreadsheet
 var spreadsheetID = "1B42bpHcFo7R7cfDvng8rSvyjWQxpiFTNqy46cCqmUZA";
 
 // Make sure it is public or set to Anyone with link can view 
 // apparently od6 stopped working in 2015: http://stackoverflow.com/questions/24531351/retrieve-google-spreadsheet-worksheet-json

 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";
 
// make JSON call to Google Data API
$.getJSON(url, function(data) {

  // set global oral_table variable
  var oral_table = '';
  var poster_table = '';

  // build table headings for oral
  oral_table += '<div class="container">';
  oral_table += '<div class="row align-items-start" style="color:#754A7E; font-size:1.5em">';
  oral_table += '<div class="col-3">Name</div>';
  oral_table += '<div class="col-3">Department</div>';
  oral_table += '<div class="col-6">Abstract Title</div>';
  oral_table += '</div>';
  
  // build table headings for oral
  poster_table += '<div class="container">';
  poster_table += '<div class="row align-items-start">';
  poster_table += '<div class="col-3">Name</div>';
  poster_table += '<div class="col-3">Department</div>';
  poster_table += '<div class="col-6">Abstract Title</div>';
  poster_table += '</div>';

  // loop to build html output for each row
  var entry = data.feed.entry;
  /**
  ** Change to descending order
  ** for (var i = entry.length - 1; i >= 0; i -= 1) {
   */
  for (var i = entry.length - 1; i >= 0; i-=1) {
      if (entry[i]['gsx$presentationtype']['$t'] == "Oral presentation"){
    oral_table += '<div class="row">';
    oral_table += '<div class="col-3">' + entry[i]['gsx$firstname']['$t'] + ' ' + entry[i]['gsx$lastname']['$t'] + '</div>';
    oral_table += '<div class="col-3">' + entry[i]['gsx$department']['$t'] + '</div>';
    oral_table += '<div class="col-6">' + entry[i]['gsx$abstracttitle']['$t'] + '</div>';
    oral_table += '</div>';
      } else {
          console.log(entry[i]['gsx$presentationtype']['$t']);
    poster_table += '<div class="row">';
    poster_table += '<div class="col-3">' + entry[i]['gsx$firstname']['$t'] + ' ' + entry[i]['gsx$lastname']['$t'] + '</div>';
    poster_table += '<div class="col-3">' + entry[i]['gsx$department']['$t'] + '</div>';
    poster_table += '<div class="col-6">' + entry[i]['gsx$abstracttitle']['$t'] + '</div>';
    poster_table += '</div>';
      }
  }
  oral_table += '</div>';
  poster_table += '</div>';

  // output oral_table
  $('.console').html(oral_table);
  $('.posters').html(poster_table);
});

// loading animation
/*var loading = $('.loading');
loading.hide();
$(document)
  .ajaxStart(function() {
    loading.show();
  })
  .ajaxStop(function() {
    loading.hide();
  });*/