var d = new Date();
d.setHours(11);
d.setMinutes(10);
d.setSeconds(0);

    window.plugin.notification.local.add({
        id:         "123",  // A unique id of the notifiction
        date:       d,    // This expects a date object
        message:    "you message",  // The message that is displayed
        title:      "Your message",  // The title of the message
        repeat:    'daily', //this will repeat daily at 14:00 time
        autoCancel: true,
    }, callback, scope);