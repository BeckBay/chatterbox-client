// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $select: $('#rooms select'),

  addRoom: function () {
    var $button = $('<button type="button" id="AddRoom">Add New Room</button>');
    return $button.on('click', RoomsView.handleClick);
  },

  initialize: function() {
    $('#rooms').append(RoomsView.addRoom());
    setTimeout(() => {

      for (var i = 0; i < Rooms._data.length; i++) {
        this.$select.append($(`<option value="${Rooms._data[i]}">${Rooms._data[i]}</option>`));
      }
    }, 1000);

  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    var input = prompt('Give name for new Room');
    var message = {
      'username': window.location.search.substring(10),
      'text': `I created a new room called ${input}`,
      'roomname': input
    };
    Parse.create(message);
    event.preventDefault();
    RoomsView.$select.prepend($(`<option value="${input}">${input}</option>`));

  }

};