// client/src/components/SendMessageForm.jsx

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../graphql/mutations';

const SendMessageForm = ({ activeUser }) => {
  const [messageText, setMessageText] = useState('');

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleInputChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessage({
      variables: {
        sender: activeUser,
        recipient: 'recipientUsername', // Replace with the actual recipient username
        text: messageText,
      },
    });

    // Clear the input field after sending the message
    setMessageText('');
  };

  return (
    <div className="send-message-form">
      <input
        type="text"
        placeholder="Type your message..."
        value={messageText}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default SendMessageForm;
