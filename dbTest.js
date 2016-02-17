var db = require('./models');

//create a user
db.user.create({
	name:'Ella',
	email: 'ellazerickson@gmail.com',
	password: 'greenbeans'
}).then(function(user) {
	console.log(user.get());
	//find a user
	db.user.findById(1).then(function(user) {
	console.log(user.get());
	});
});


