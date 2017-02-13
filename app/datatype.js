/*
Funtion to compare and return results, based
on the argument supplied to the function.
*/

function dataTypes(args) {

	var return_var; // to ensure single return statement

	switch (args) {
		case null: return_var = "no value";
		break;

		case undefined: return_var = "no value";
		break;

		default: {
	  		if (args.constructor === String) {
	    	// Return length if args is string.
	    		return_var = args.length; 
	  		} else if (args.constructor === Boolean) {
	    		// Return True or False if args is Boolean
	    		return_var = args; 
	  		} else if (args.constructor === Number) {
	    		// Call function valueSize if args is Number & assign its value to return_var
	    		return_var = valueSize(args);
	  		} else if (args.constructor === Array) {
	  			// Call function isArray if args is an Array & assign its value to return_var
	    		return_var = isArray(args);
	  		} else if (args.constructor === Function) {
	  			// Pass `true` as argument into function args()
	  			return_var = args(true);
	  		}
	  		
	  	}
	  }
	   return return_var;
	}

/*
Function to check if input equals, is less than
or larger than 100
*/

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

/*
Function to check if an array has up to 3 indexes
and return the value of the third index
*/

function isArray(array) {
	if (array.length >= 3) {
		return_index = array[2];
	} else {
		return_index = undefined;
	}
	return return_index;
}

exports.dataTypes = dataTypes;