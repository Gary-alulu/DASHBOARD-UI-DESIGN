import { useState } from 'react';
import { MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const contacts = [
    {
      id: 1,
      name: 'Sarah Wilson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMessage: 'Hey, how are you doing?',
      time: '2:30 PM',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'John Cooper',
      avatar: 'https://i.pravatar.cc/150?img=2',
      lastMessage: 'The project is due tomorrow',
      time: '1:45 PM',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Emily Brown',
      avatar: 'https://i.pravatar.cc/150?img=3',
      lastMessage: 'Can we schedule a meeting?',
      time: '11:20 AM',
      unread: 1,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Wilson',
      content: 'Hey, how are you doing?',
      time: '2:30 PM',
      isMe: false,
    },
    {
      id: 2,
      sender: 'Me',
      content: "I'm doing great! How about you?",
      time: '2:31 PM',
      isMe: true,
    },
    {
      id: 3,
      sender: 'Sarah Wilson',
      content: 'Pretty good! Just working on the new project.',
      time: '2:32 PM',
      isMe: false,
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Sidebar - Contacts */}
      <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Messages</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-active/20"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="space-y-2">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${selectedChat === contact.id ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
              onClick={() => setSelectedChat(contact.id)}
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-800" />
                )}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium">{contact.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{contact.lastMessage}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 dark:text-gray-400">{contact.time}</p>
                {contact.unread > 0 && (
                  <span className="inline-block px-2 py-0.5 bg-lime-active text-white text-xs rounded-full mt-1">
                    {contact.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Chat */}
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-3 pb-6 border-b dark:border-gray-700">
              <img
                src={contacts.find((c) => c.id === selectedChat)?.avatar}
                alt="Contact"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{contacts.find((c) => c.id === selectedChat)?.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {contacts.find((c) => c.id === selectedChat)?.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="py-6 space-y-4 h-[calc(100vh-400px)] overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${message.isMe ? 'bg-lime-active text-white' : 'bg-gray-50 dark:bg-gray-700'}`}
                  >
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isMe ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="pt-6 border-t dark:border-gray-700">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-active/20"
                />
                <button className="p-2 bg-lime-active text-white rounded-xl hover:bg-lime-active/90 transition-colors">
                  <PaperAirplaneIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;