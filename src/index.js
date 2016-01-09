'use strict';

import execa from 'execa';

module.exports = function () {
	const binQuery = [
		['npm', ['bin']],
		['npm', ['bin', '-g']]
	];

	return Promise.all(binQuery.map((query) => {
		return execa(query[0], query[1]);
	})).then(res => {
		return res.filter(r => {
			return !r.stderr && r.stdout;
		}).map(r => {
			return r.stdout;
		});
	});
};
