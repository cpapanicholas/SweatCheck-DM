// client/src/components/ChatWindow.jsx

import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const ChatWindow = ({ activeUser, onSendMessage }) => {
  const [messages, setMessages] = useState([]);

  // Dummy data for initial messages (you'll replace this with actual data)
  const initialMessages = [
    { id: 1, text: 'Hello!', sender: 'user1' },
    { id: 2, text: 'Hi there!', sender: 'user2' },
    // Add more initial messages as needed
  ];

  useEffect(() => {
    // Set initial messages when the component mounts
    setMessages(initialMessages);
  }, []);

  const handleSendMessage = (text) => {
    // Create a new message object
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: activeUser,
    };

    // Update the state with the new message
    setMessages([...messages, newMessage]);

    // Callback to the parent component to handle sending the message to the server
    onSendMessage(newMessage);
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} activeUser={activeUser} />
      <SendMessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
