
var Logger = function() {
    this.messages = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(!isNaN(this.messages[message])){
        if(this.messages[message] <= timestamp){
            this.messages[message]= timestamp + 10;
            return true;
        } else {
            // this.messages[message]+= timestamp;
            return false
        }
    } else {
        this.messages[message]= timestamp + 10;
        console.log(this.messages)
        return true;
    }
    
};