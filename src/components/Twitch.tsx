import React from 'react';
import { TwitchEmbed } from "react-twitch-embed";

export const Twitch = () => {
    return (
            <div className="twitch-container">
                <TwitchEmbed
                    channel="birdcageradio"
                    id="twitch"
                    width="90vw"
                    height="80vh"
                    allowFullscreen={true}
                    darkMode={true}
                />
            </div>
    );
};

export default Twitch;
