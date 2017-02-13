function dataType(args) {
	var return_var;
	if (args.constructor === String) {
		return_var = args.length;
	} else if (args.constructor === Boolean) {
		return_var = args;
	} else if (args.constructor === Number) {
		return_var = valueSize(args);
	} else if (args.constructor === Array) {
		return_var = isArray(args);
	} else
}

function valueSize(number) {
	var word;
	if (number < 100) {
		word = "less than 100";
	} else if (number === 100) {
		word = "equal to 100";
	} else {
		word = "more than 100";
	}
	return word;
}

function isArray(array) {
	if (array.length >= 4) {
		return_index = array[3];
	} else {
		return_index = "undefined";
	}
	return return_index;
}