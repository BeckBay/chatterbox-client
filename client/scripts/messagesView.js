// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var output = '';
    setTimeout(() =>{
      for ( var i = 0; i < Messages._data[0].length; i++) {
        MessageView.text = Messages._data[0][i].text;
        MessageView.username = Messages._data[0][i].username;
        var input = MessageView.render();
        this.$chats.append(input);
      }


    }, 1000);

  },

  render: function() {
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(message = 'didnt enter message', username = 'didnt enter username') {
    console.log(message,username);
    MessageView.text = message;
    MessageView.username = username;
    var input = MessageView.render();
    this.$chats.append(input);
  },

  handleClick: function(event) {
    console.log(event);

    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};