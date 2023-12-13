// client/src/pages/HomePage.jsx

import React, { useState } from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';

const HomePage = () => {
  const [activeUser, setActiveUser] = useState(null); // Represents the currently active user
  const [selectedChat, setSelectedChat] = useState(null); // Represents the selected chat

  const handleUserSelect = (user) => {
    setActiveUser(user);
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="home-page">
      <ChatList onUserSelect={handleUserSelect} onChatSelect={handleChatSelect} />
      {activeUser && selectedChat && (
        <ChatWindow activeUser={activeUser} onSendMessage={() => {}} />
      )}
    </div>
  );
};

export default HomePage;
