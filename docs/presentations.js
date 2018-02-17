var presinfo;
var f = "2018_symposium.csv";
d3.csv(f, function(data) {
    presinfo = data.map(function (d) {
        return {
        Room: d.Room,
        Time: d.Time,
        MilTime: d.MilTime,
        Name: d.Name,
        LastName: d['Last Name'],
        Number: d.Number,
        Department: d.Department,
        AbstractTitle: d['Abstract Title'],
        Abstract: d.Abstract,
        Narrative: d.Narrative
        }; })
    })