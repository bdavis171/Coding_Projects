// import express
let express = require("express");
// define server
let app = express();

// render react when backend runs
app.use(express.static('../character-bio-app/build'));
// send react app
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../character-bio-app/build/index.html'));
});
// server listening on port
let port = process.env.PORT || 1997
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});