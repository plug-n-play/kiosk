/**
 * FooController
 *
 * @description :: Server-side logic for managing foos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	example: function(req, res) {
		console.log("EXAMPLE HIT");
    
    sails.sockets.join(req.socket, "messageSocket");
    var obj = {
    	success: false
    };

    var numKeys = Object.keys(req.allParams()).length;

    if (numKeys > 1) {
    	obj.success = true;
    }

    obj.userName = req.param('userName');
	obj.starDate = req.param('starDate');
	obj.endDate = req.param('endDate');
	obj.hotelName = req.param('hotelName');
	obj.roomNumber = req.param('roomNumber');

	console.log(obj);

    sails.sockets.broadcast("messageSocket", "myEvent", obj);
    
    res.send({
      success: true
    });
  }
};

