// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      var roomName = data.slice(0, 50);
      // examine the response from the server request:
      Messages._data.push(data.slice(0, 20));
      roomName.forEach((name) => {
        if (name.roomname !== null && !Rooms._data.includes(name.roomname)) {
          if (name.roomname.length !== 0) {
            Rooms._data.push(name.roomname);
          }

        }
      });
      App.stopSpinner();
      // TODO: Use the data to update Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
