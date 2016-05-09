## shit that didn't work

-	CSS "grid" (i.e. the next gen full-page twin to flexbox) is not yet
	supported
	https://css-tricks.com/snippets/css/complete-guide-grid/

-	babel. I tried so hard. They are like allergic to you calling the CLI
	yourself once you install it (JESUS CHRIST, I JUST WANT TO RUN SOMETHING
	ONCE I INSTALL IT, IS THAT TOO MUCH TO ASK), but adding it to the package
	and saving as dev and shit, it's nowhere to be found. I mean a bajillion
	files are downloaded, but where is it? I can't call it, npm can't find
	it, ...
	https://babeljs.io/docs/setup/#installation

-	various JS linters either shit the bed at JSX or at ES6. The one I found
	that doesn't has a message saying it's not maintained anymore and to use
	other ones (that don't work). Also, everyone wants you to have a
	`.myfancyprojectrc` file. Get over yourself. You're not bash. Use Atom's
	config.

-	doing a `<script src="[something].jsx" type="text/babel></script>"`
	because Chrome shits the bed about HTTP or HTTPS or something. WHAT?

-	browserify doesn't work on HTML files. This has to be a joke. So I can't
	use babel to compile JSX files because it's fucked, I can't include a JSX
	file from locally and use it with babel in the browser because Chrome
	shits the bed, and I can't use write the `var React = require('React')`
	first line of code that React instructs me to write because browserify
	can't handle HTML files. Why would a default example require a
	transformation to work? Does `require(...)` actually work in browser JS,
	not just in node? Why would a frontend framework like React have examples
	that use node syntax?
