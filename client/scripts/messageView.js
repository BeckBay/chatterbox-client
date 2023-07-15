// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  text: '',
  username: '',
  render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <p><%=this.username%></p>
        <h1><%=this.text%></h1>
        <div></div>
      </div>
    `)

};
