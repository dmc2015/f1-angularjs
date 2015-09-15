var express = require('express');
var app = express();

// app.set("env", "development");
// app.use('/drivers/:driverID', function(req, res, next) {
//
// });

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function() {
  console.log('Server running localhost: 3000');
});
