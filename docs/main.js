Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRZk0Qw4WZGyITcqZxPBILzRkr9LNlP5UGdi14fFi1zWGzoASX6N47UfPbpkp8doG_dVxsr93Nfcucb/pubhtml?gid=1805729889&single=true", {
	download: true,
	complete: function(results) {
		console.log(results);
	}
});