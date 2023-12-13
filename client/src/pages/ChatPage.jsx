import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  const [activeUser, setActiveUser] = useState('user1'); // Replace with actual user data

  return (
    <div className="chat-page">
      <ChatWindow activeUser={activeUser} onSendMessage={() => {}} />
    </div>
  );
};

export default ChatPage;