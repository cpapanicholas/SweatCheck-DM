import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  // Access the dynamic parameter from the URL
  const { recipientUsername } = useParams();
  const [activeUser, setActiveUser] = useState(recipientUsername);

  const handleSendMessage = (newMessage) => {
    // Handle sending the message to the server or perform any other actions
    console.log('Sending message:', newMessage);
  };

  return (
    <div className="chat-page">
      <ChatWindow activeUser={activeUser} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
