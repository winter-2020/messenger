// Class: is a blueprint for an entity
// Object: is created from a class
// Instance: is a single Object that was built using a class

// Properties: Variables that are scoped to the class
// Method: Functions that are scoped to the class
// Constructor: A special method that runs ONCE when the "new" instance is created, receives parameters from the instantiation

// The keyword "this" when used in a class definition, refers to the class itself. Any reference to a property or method from within this class, must start with `this.` when used inside of methods to ensure that the scope of the property or method we're requesting is of the class, not of the method locally

class Message {
  constructor(txt) { 
    this.text = txt
    this.from = `Me`
  }
  getMessage() {
    return `${this.from}: ${this.text}`
  }
  getMessageAsHtml() {
    return `<li>${this.from}: ${this.text}</li>`
  }
  setText(txt) {
    this.text = txt
  }
}


const messages = []
const container = document.getElementById('messages')

messages.push(new Message(`Did you get my email?`))
messages.push(new Message(`Hello... I'm talking to you!`))
messages.push(new Message(`I guess you left. 🙁`))

function renderMessages() {
  messages.forEach(msg => {
    container.innerHTML += msg.getMessageAsHtml()
  })
}

renderMessages()




/* 
Using the code above...
1. Collect all of the existing Message instances (references) in an Array called "messages"
2. Test this by pushing a new messages to the Array after it has been constructed
3. Print all messages to the console using the using the Message method getMessage()
4. Push a new message to the Array and re-update the console
*/

/* 
If you complete the above...
1. Wrap the "print" functionality (step 3 above) into a function called renderMessages
2. Create a <ul> in HTML with an id of "messages"
3. Store a reference to the ul#messages to a variable named "container"
4. Add a method to Message that will return the text and sender information for a Message, as a string of <li>: getMessageAsHtml()
5. Modify the renderMessages function to call on the new getMessageAsHtml() function
*/



/* 
What might a Message need?
  Properties (variables)
    - Message id
    - Time created
    - Status
    - Text
    - User (sender)
    - User (receiver)
  Methods (functions) 
    - initialize the message: constructor
    - editMessage
    - formatMessageAsHtml
*/