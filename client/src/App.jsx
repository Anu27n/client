import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';

const apiKey = "6nvp7fs58bk6";

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {

    if (!authToken) return <Auth />
    return (
        <div className="app_wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    );
};

export default App;