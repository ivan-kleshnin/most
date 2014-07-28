/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */
/** @module */

exports.identity = identity;
exports.cons = cons;
exports.tail = tail;

function identity(x) {
	return x;
}

function cons(x, array) {
	var l = array.length;
	var a = new Array(l + 1);
	a[0] = x;
	for(var i=0; i<l; ++i) {
		a[i + 1] = array[i];
	}
	return a;
}

function tail(array) {
	var l = array.length - 1;
	var a = new Array(l);
	for(var i=0; i<l; ++i) {
		a[i] = array[i + 1];
	}
	return a;
}