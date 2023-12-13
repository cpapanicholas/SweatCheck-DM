import React from 'react';

const MessageList = ({ messages, activeUser }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === activeUser ? 'sent' : 'received'}`}
        >
          <p>{message.text}</p>
          <span className="sender">{message.sender}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;