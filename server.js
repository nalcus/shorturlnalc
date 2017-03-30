var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res) {

    res.json({"original_url":null, "short_url":null})
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});