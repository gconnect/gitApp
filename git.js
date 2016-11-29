//Use github api
function loadUserProfile(username) {

	const http = require('https');
	
	var options = {
		host: 'api.github.com',
		path: '/users/' + username,
		method: 'GET',
		headers: {'user-agent': 'node.js'}
	};

	http.get(options, function(resp) {
	  
	  resp.on('data', function(data) {
	    
	    var dataString = data.toString();
	    console.log(dataString);

	  });
	  
	})
	.on("error", function(e) {
	  
	  console.log("An error occured: " + e.message);
	  
	});
}

loadUserProfile('gconnect');