// In this demo, we will see how path variables in the URL are used.

var express = require('express');
var app = express();

// Suppose I want ths request - GET `/bookings/<bookingId>` - to be handled in this way:
// return a respond that include the path variable `bookingId` being sent at the first place.
app.get('/bookings/:bookingId', (req, res) => {
    res.send(req.params);
})

// As we are done, we will hit the URL `localhost:3000/bookings/123`,
// and we should see `{"bookingId": "25"}`. Note that the booking ID 25, is treated as string but not number.
// You can try `localhost:3000/bookings/abc`, and you should see `{"bookingId": "abc"}`
app.listen(3000);
