function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
function load() {
 loadJSON("presentations.json", function(response) {
  // Parse JSON string into object
    var values = JSON.parse(response);
    console.log(values);
 });
}

// var options = {
//   valueNames: [ 'name', 'born' ],
//   item: '<li><h3 class="name"></h3><p class="born"></p></li>'
// };

// var values = [{
//     name: 'Jonny Strömberg',
//     born: 1986
//   },
//   {
//     name: 'Jonas Arnklint',
//     born: 1985
//   },
//   {
//     name: 'Martina Elm',
//     born: 1986
// }];

// var userList = new List('users', options, values);

/*userList.add({
  name: "Gustaf Lindqvist",
  born: 1983
});
*/