function dataType(args) {
	var return_var;
	if (string) {
		return_var = args.length;
	} else if (typeof(args) === "boolean") {
		return_var = args;
	} else if (typeof(args) === "number") {
		return_var = valueSize(args);
	}
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
	return i
}