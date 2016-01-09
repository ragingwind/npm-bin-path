'use strict';

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
	var binQuery = [['npm', ['bin']], ['npm', ['bin', '-g']]];

	return Promise.all(binQuery.map(function (query) {
		return (0, _execa2.default)(query[0], query[1]);
	})).then(function (res) {
		return res.filter(function (r) {
			return !r.stderr && r.stdout;
		}).map(function (r) {
			return r.stdout;
		});
	});
};