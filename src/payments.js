var moment = require('moment');


module.exports = function (xero) {
  
  xero.Payments = {
    all: function (callback) {
      xero.get('/Payments', function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Payments);
      });
    },
    
    
    find: function (id, callback) {
      xero.get('/Payments/' + id, function (err, json) {
        if (err) {
          return callback(err);
        }
        
        callback(null, json.Payments[0]);
      });
    },
    
    
    create: function (params, callback) {
      xero.post('/Payments', { Payment: params }, function (err, json) {
        if (params.Date) {
          params.Date = moment(params.Date).format('YYYY-MM-DD');
        }

        if (err) {
          return callback(err);
        }
        
        callback(null, json.Payments[0]);
      });
    }
  }
  
}