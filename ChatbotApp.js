import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const ChatbotApp = () => {
    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: "Hello! I am your chatbot. How can I help you?",
            createdAt: new Date(),
            user: { _id: 2, name: "Chatbot" },
        },
    ]);

    const handleSend = async (newMessages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );

        const userMessage = newMessages[0].text;
        const botResponse = await generateChatbotResponse(userMessage);

        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: botResponse,
                    createdAt: new Date(),
                    user: { _id: 2, name: "Chatbot" },
                },
            ])
        );
    };

    const generateChatbotResponse = async (userMessage) => {
        const apiUrl = `http://api.brainshop.ai/get?bid=164739&key=i8JelptXLldYNTYa&uid=1&msg=${encodeURIComponent(userMessage)}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data.cnt;
        } catch (error) {
            console.error("Error fetching response:", error);
            return "Sorry, something went wrong.";
        }
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={(newMessages) => handleSend(newMessages)}
            user={{ _id: 1, name: "User" }}
        />
    );
};

export default ChatbotApp;
