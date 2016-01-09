import test from 'ava';
import fn from './';

test(t => {
	return fn().then(p => {
		t.ok(p);
		t.is(p.length, 2);
	});
});
