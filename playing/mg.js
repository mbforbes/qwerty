var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("we're connected!!");
	var kittySchema = mongoose.Schema({
		name: String
	});
	kittySchema.methods.speak = function() {
 		// please shoot me
		var greeting = this.name ?
			"Meow name is " + this.name :
			"I don't have a name";
		console.log(greeting);
	};

	var Kitten = mongoose.model('Kitten', kittySchema);

	var silence = new Kitten({name: 'Silence'});
	silence.speak();

	var fluffy = new Kitten({name: 'fluffy'});
	fluffy.speak();

	fluffy.save(function (err, fluffy) {
		if (err) return console.error(err);
		fluffy.speak();
	});

	console.log('finding all kittens');
	// WHY IS FLUFFY MEOWING HERE???
	Kitten.find({name: /^Fluff/ }, function(err, res) {
		console.log('err: ' + err);
		console.log('res: ' + res);
	});
});
