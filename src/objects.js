// Author:      Austin Welborn
// Class:       CS290
// Date:        1/26/2015
/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  //Modify ONLY this line
    var object = {type:"Goldfish", brand:"Pepperidge Farm", flavor:"Cheddar", count: 2000};
	return object;
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user) {
	this.name = user;

	var sentCounter = 0, receivedCounter = 0;		// counters for sent and received 
	this.SentMessage = [];							// array of sent messages
	this.Receivedmessage = [];						// array of received messages
	
	// method for logMessage
	this.logMessage = function(messageText, direction) {

		if (direction === 0)						// if direction is 0
		{
			sentCounter++;							// increment counter
			
			if(this.SentMessage.length <= 5)		// if array has less or equal to 5 elements
			{
				this.SentMessage.unshift(messageText);	// push the string to the 0th element
			}
			else
			{
				this.SentMessage.pop();				// else pop out the last element, then push into the 0th element
				this.SentMessage.unshift(messageText);
			}
		}
		else if (direction === 1)					// if direction is 1
		{
			receivedCounter++;						// increment counter
			
			if(this.Receivedmessage.length <= 5)	// if array has less or equal to 5 elements
			{
				this.Receivedmessage.unshift(messageText); // push the string to the 0th element
			}
			else
			{
				this.Receivedmessage.pop();					// else pop the last element, then push into the 0th element
				this.Receivedmessage.unshift(messageText);
			}
			
		}
	}

	// method for getSentMessage
	this.getSentMessage = function(n) {
		try {
			if (n > 4) throw "is too high";		// if n is less than 0 or greater than 4
			if (n < 0) throw "is too low";
		}
		catch(err) {							// throw error
			console.log("Number " + err);
		}
		return this.SentMessage[n];				// returns the sent message at nth position
	}

	// method for totalSent
	this.totalSent = function() {
		return sentCounter;
	}

	// method for totalReceived
	this.totalReceived = function() {
		return receivedCounter;
	}
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
 // prototype method for lastReceivedMessage
 MessageLog.prototype.lastReceivedMessage = function() {
 	return this.Receivedmessage[0];
 }
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog("BlackHatGuy");
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);

//end your code
