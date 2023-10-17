import React, { useState } from 'react';
import MessageInput from './MessageInput';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, user: 'Você' }]);
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === 'Você' ? 'sent' : 'received'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <MessageInput message={message} setMessage={setMessage} sendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatBox;



import React from 'react';

function MessageInput({ message, setMessage, sendMessage }) {
  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default MessageInput;
