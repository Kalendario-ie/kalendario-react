import React from 'react';

interface AvatarImgProps {
    src: string;
    alt?: string;
}

const AvatarImg: React.FunctionComponent<AvatarImgProps> = ({src, alt}) => {
    const avatarStyle = {
        width: '7rem',
        height: '7rem'
    }

    return (
        <img className="round-image" src={src} alt={alt} style={avatarStyle}/>
    )
}

export default AvatarImg;
