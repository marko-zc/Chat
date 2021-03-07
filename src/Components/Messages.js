import React from "react";

class Messages extends React.Component
{

  messagesEnd = React.createRef();

  componentDidMount () {
    this.scrollToBottom()
  }
  componentDidUpdate () {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
  }

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
        <span
          className="avatar"
          style={{backgroundColor: member.clientData.color}}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
        <div ref={this.messagesEnd} />
      </ul>
    );
  }
}

export default Messages;