var os = require('os');
var dns = require('dns');

var message = 'Here is some info about your sustem';
var sysarray = new Array(
		'Type: ' + os.type(), 
		'Node Version: ' + process.version,
		'Platform: ' + os.platform(),
		'Hostname: ' + os.hostname(),
		'Total Memory: ' + os.totalmem(),
		'Available Memory: ' + os.freemem(),
		'UpTime: ' + os.uptime()
	);
console.log(message);
var arraylen = sysarray.length;
for (var i =0; i < arraylen; i++) {
	console.log(sysarray[i]);
};

dns.lookup('www.google.com', function onLookup(err, addresses, family) {
  console.log('addresses:', addresses);
});