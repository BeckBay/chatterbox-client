// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),


  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },


  handleSubmit: function(event) {
    var message = {
      'username': window.location.search.substring(10),
      'text': event.target[0].value,
      'roomname': 'main room'
    };
    if (message.text.length !== 0) {
      Parse.create(message);
      // Stop the browser from submitting the form
      event.preventDefault();

      // TODO: Currently, this is all handleSubmit does.
      // Make this function actually send a message to the Parse API.
      Parse.readAll();
      //have to update messages before we call this
      MessagesView.renderMessage(message.text, message.username);
      $('#send')[0].reset();
    } else {
      event.preventDefault();
      alert('please enter text');
    }


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enable', status);
  }

};
