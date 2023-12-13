// client/src/components/SendMessageForm.jsx

import React, { useState } from 'react';

const SendMessageForm = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState('');

  const handleInputChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (messageText.trim() !== '') {
      // Call the parent component's function to send the message
      onSendMessage(messageText);

      // Clear the input field after sending the message
      setMessageText('');
    }
  };

  return (
    <form className="send-message-form" onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Type your message..."
        value={messageText}
        onChange={handleInputChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessageForm;
