module.exports = function (xero) {

	xero.Contacts = {
		all: function (callback) {
			xero.get('/Contacts', function (err, json) {
				if (err) {
					return callback(err);
				}

				callback(null, json.Contacts);
			});
		},


		find: function (id, callback) {
			xero.get('/Contacts/' + id, function (err, json) {
				if (err) {
					return callback(err);
				}

				callback(null, json.Contacts[0]);
			});
		},

		create: function (params, callback) {
			if (params.DefaultCurrency) {
				params.DefaultCurrency = params.DefaultCurrency.toUpperCase()
			}

			xero.post('/Contacts', { Contact: params }, function (err, json) {
				if (err) {
					return callback(err);
				}

				callback(null, json.Contacts[0]);
			});
		},

		update: function (id, params, callback) {
			xero.post('/Contacts/' + id, { Contact: params }, function (err, json) {
				if (err) {
					return callback(err);
				}

				callback(null, json.Contacts[0]);
			})
		},
	};

};