var request = require('request');
var YQL_uri = "http://query.yahooapis.com/v1/public/yql/jamiewildehk/hko_warn_ts?format=json&date="
exports.getTSW = function(req, res) {
  request({ uri: YQL_uri + req.params.date, 
           json: true}, 
  function(err, response, body) {
    if (err) { return res.send({ error : err}); }
    if (body.query.results) {
      var values = body.query.results.strong;
      var results = {
          warnings : values.length/4,
          totalDuration : 0,
          details : []
      };
      for(n=0;n<values.length;n+=4) {
        var startDate = new Date(Date.parse(values[n].toString() 
                                            + " " 
                                            + values[n+1].toString()
                                           )
                                );
        var endDate = new   Date(Date.parse(values[n+2].toString() 
                                            + " " 
                                            + values[n+3].toString()
                                           )
                                );
        results.totalDuration += (endDate - startDate) / 60000;
        results.details.push({
          from : startDate,
          to: endDate
        });
      }
      return res.send({ warning : results});
    } else {
      return res.send({ warning : null});
    }
  });
};
