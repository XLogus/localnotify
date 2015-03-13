var d = new Date();
d.setHours(11);
d.setMinutes(35);
d.setSeconds(0);

    window.plugin.notification.local.add({
        id:         "123",  // A unique id of the notifiction
        date:       d,    // This expects a date object
        message:    "you message 11 35",  // The message that is displayed
        title:      "Your message",  // The title of the message
        repeat:    'daily', //this will repeat daily at 14:00 time
        autoCancel: true,
    }, callback, scope);
	
	
var d = new Date();
d.setHours(11);
d.setMinutes(45);
d.setSeconds(0);

    window.plugin.notification.local.add({
        id:         "321",  // A unique id of the notifiction
        date:       d,    // This expects a date object
        message:    "you message 11 45",  // The message that is displayed
        title:      "Your message",  // The title of the message
        repeat:    'daily', //this will repeat daily at 14:00 time
        autoCancel: true,
    }, callback, scope);	
	

var d = new Date();
d.setHours(12);
d.setMinutes(35);
d.setSeconds(0);

    window.plugin.notification.local.add({
        id:         "12345",  // A unique id of the notifiction
        date:       d,    // This expects a date object
        message:    "you message 12 35",  // The message that is displayed
        title:      "Your message",  // The title of the message
        repeat:    'daily', //this will repeat daily at 14:00 time
        autoCancel: true,
    }, callback, scope);