import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MESSAGES } from '../graphql/queries';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const ChatWindow = ({ activeUser, recipientUser }) => {
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { sender: activeUser, recipient: recipientUser },
  });

  const [messages, setMessages] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const existingMessages = data.messages || [];

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
    // Pass the new message to the callback
    // onSendMessage(newMessage);
  };

  return (
    <div className="chat-window">
      <MessageList messages={existingMessages} activeUser={activeUser} />
      <SendMessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
