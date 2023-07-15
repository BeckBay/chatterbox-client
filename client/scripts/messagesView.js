// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.


var MessagesView = {

  $chats: $('#chats'),

  refresh: function () {
    var $refreshbutton = $('<button type="button"id="refresh">Refresh</button>');
    return $refreshbutton.on('click', MessagesView.render);
  },

  initialize: function() {
    $('#send').append(MessagesView.refresh());
    setTimeout(() =>{
      for ( var i = 0; i < Messages._data[0].length; i++) {
        if (Messages._data[0][i].text.toString().includes('<') === true) {
          MessageView.text = Messages._data[0][i].text.slice(1);

        } else {
          MessageView.text = Messages._data[0][i].text;
        }

        MessageView.username = Messages._data[0][i].username;
        var input = MessageView.render();
        this.$chats.append(input);
      }
    }, 1000);

  },

  render: function() {

    Messages._data = [];
    App.startSpinner();
    App.fetch();
    setTimeout(() =>{
      MessagesView.$chats.empty();
      for ( var i = 0; i < Messages._data[0].length; i++) {
        if (Messages._data[0][i].text.toString().includes('<') === true) {
          MessageView.text = Messages._data[0][i].text.slice(1);
        } else {
          MessageView.text = Messages._data[0][i].text;
        }
        MessageView.username = Messages._data[0][i].username;
        var input = MessageView.render();
        MessagesView.$chats.append(input);
      }
      App.stopSpinner();
    }, 1000);
  },

  renderMessage: function(message = 'didnt enter message', username = 'didnt enter username') {
    MessageView.text = message;
    MessageView.username = username;
    var input = MessageView.render();
    this.$chats.prepend(input);
  },

  handleClick: function(event) {
    // console.log(event);

    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};