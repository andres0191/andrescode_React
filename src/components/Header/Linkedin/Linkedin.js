import React from 'react';
import '../../Header/style.scss';
import {SocialMediaIconsReact} from 'social-media-icons-react';

export default function Linkedin(){
    return(
        <div className='space'>
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="inset" icon="linkedin" iconColor="rgba(188,188,188,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="39%" url="https://linkedin.com/in/anfegar/" size="35" />
        </div>
    )
}