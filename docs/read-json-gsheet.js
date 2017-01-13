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
  oral_table += '<table cellpadding=10 cellspacing=0 border=1>';
  oral_table += '<tr>';
  oral_table += '<th>Name</th>';
  oral_table += '<th>Department</th>';
  oral_table += '<th>Abstract Title</th>';
  oral_table += '<th>Academic Status</th>';
  oral_table += '</tr>';
  
  // build table headings for oral
  poster_table += '<table cellpadding=10 cellspacing=0 border=1>';
  poster_table += '<tr>';
  poster_table += '<th>Name</th>';
  poster_table += '<th>Department</th>';
  poster_table += '<th>Abstract Title</th>';
  poster_table += '<th>Academic Status</th>';
  poster_table += '</tr>';

  // loop to build html output for each row
  var entry = data.feed.entry;
  /**
  ** Change to descending order
  ** for (var i = entry.length - 1; i >= 0; i -= 1) {
   */
  for (var i = entry.length - 1; i >= 0; i-=1) {
      if (entry[i]['gsx$presentationtype']['$t'] == "Oral presentation"){
    oral_table += '<tr>';
    oral_table += '<td>' + entry[i]['gsx$firstname']['$t'] + ' ' + entry[i]['gsx$lastname']['$t'] + '</td>';
    oral_table += '<td>' + entry[i]['gsx$department']['$t'] + '</td>';
    oral_table += '<td>' + entry[i]['gsx$abstracttitle']['$t'] + '</td>';
    oral_table += '<td>' + entry[i]['gsx$academicstatus']['$t'] + '</td>';
    oral_table += '</tr>';
      } else {
          console.log(entry[i]['gsx$presentationtype']['$t']);
    poster_table += '<tr>';
    poster_table += '<td>' + entry[i]['gsx$firstname']['$t'] + ' ' + entry[i]['gsx$lastname']['$t'] + '</td>';
    poster_table += '<td>' + entry[i]['gsx$department']['$t'] + '</td>';
    poster_table += '<td>' + entry[i]['gsx$abstracttitle']['$t'] + '</td>';
    poster_table += '<td>' + entry[i]['gsx$academicstatus']['$t'] + '</td>';
    poster_table += '</tr>';
      }
  }
  oral_table += '</table>';
  poster_table += '</table>';

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