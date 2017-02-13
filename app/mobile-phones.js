function MobilePhone(make, model, os_name, os_version, color) {
	this.make = make;
	this.model = model;
	this.os_name = os_name;
	this.os_version = os_version;
	this.color = color;
	this.getInfo = function() {
		return "A " this.color + " " + this.make + " " + this.model + " with " + this.os_name + " " + os_version;
	}
	if(color === undefined){
    this.color = "Black (default)";
	} else { 
		this.color = color;
	}
}

// Inheritance

var pdaPhones = new MobilePhone();


// Encapsulation
pdaPhones.prototype = function sendFax() {
	return "Send and receive Fax messages on " + this.make " " + this.model;
}

MobilePhone.prototype = function makeCall() {
	return "Make Calls with " + this.make + " " + this.model;
}

MobilePhone.prototype = function browseInternet() {
	return "Surf the Internet with " + this.make + " " + this.model;
}

MobilePhone.prototype = function sendSms() {
	return "Send SMS with " + this.make + " " + this.model;
}

MobilePhone.prototype = function sendMms() {
	return "Send MMS with " + this.make + " " + this.model;
}
